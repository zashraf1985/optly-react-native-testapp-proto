# Optimizely React Native Testapp Prototype
This is a prototype and proof of concept for react native testapp design. It only demonstrates high level design and does not use / test all features of SDK

## Prototype Code

All the prototype code is inside /prototype

https://github.com/zashraf1985/optly-react-native-testapp-proto/tree/master/prototype

## Build instructions

```
yarn install
npm install -g expo
yarn web
```

## High Level Design

### MainScreen
Main Screen is the screen that mobile e2e server will interact with. Ideally me2e will send a link to the file containing list of requests but for prototype, request list is defined inside data/SampleRequests.ts.
When "Call API" button is clicked, it renders the following block once for each request.

```Javascript
{ currentRequest &&
  <OptlyRequest 
    callApi={ currentRequest.call_api } 
    payload={ currentRequest.body.payload }
    completionHandler={ this.onRequestComplete }
  />
}
```
`OptlyRequest` calls `onRequestComplete` callback with the result when the processing for the request is complete. Then `currentRequest` state variable is set to null in order to destroy the previous `OptlyRequest` component. Then it updates the `currentRequest` with the next request. This makes sure that each new request is creating a new instance of component instead of reusing the existing one.

```Javascript
processNextRequest = () => {
  this.setState(
    { currentRequest: null }, 
    () => this.setState({ currentRequest: this.requests[++this.currentRequestIndex] }),
  )    
}
```
When all the requests is are processed, the resulting JSON is populated in the TextView as expected by Mobile E2E server.

### OptlyRequest
A new instance of this component is created for each request. This is ensured by setting `currentRequest` to null in the parent component after each request is processed to destroy the component. It uses `OptimizelyProvider` to initialize a new optimizely instance.

```Javascript
constructor(props: OptlyRequestProps) {
  super(props);
  console.log('Initializing OptimizelyComponent');
  this.optlyInstance = OptlyWrapperFactory.getInstance(props.payload.context.session_id, props.payload);
}
```
It generally creates a new optimizely instance for each request. The factory adds the functionality to reuse the optimizely instances for the requests with same session id.

It creates `OptimizelyProvider` for each request.

```Javascript
<OptimizelyProvider 
  optimizely={ this.optlyInstance.optimizelyClient }
  user={{ 
    id: payload.user_id,
    attributes: payload.attributes,
  }}>
  { this.callAPIMethod() }
</OptimizelyProvider>
```

`callaAPIMethod` makes the actual call to optimizely SDK. Activate, isFeatureEnabled and getFeatureVariable are be called using React SDK components while other SDK methods are called directly on optimizely client instance. 

```Javascript
switch (callApi) {
    case 'activate': return (
      <OptimizelyExperiment experiment={ payload.experiment_key }>
        { (variation) => {
            this.onComplete(variation) 
            return <React.Fragment />;
          }
        }
      </OptimizelyExperiment>
    )
    case 'is_feature_enabled': return (
      <OptimizelyFeature feature={ payload.feature_flag_key }>
        { (isEnabled, variables) => { 
            this.onComplete(isEnabled) 
            return <React.Fragment />
          }
        }
      </OptimizelyFeature>
    )
    case 'get_variation': 
        this.onComplete(this.optlyInstance.getVariation());
        return <React.Fragment />
    default:
        this.onComplete(null);
        return <React.Fragment />
  }
}
```

### OptlyWrapper
This is wrapper of optimizely client instance created by calling `createInstance` methods exposed by react SDK. This wrapper will 
1. wrap SDK methods.
2. Set forced variations. 
3. Override loggers, event dispatchers, UserProfile Service
4. Add and watch for listeners called.
5. And the like

```Javascript
export default class OptlyWrapper {
  optimizelyClient: ReactSDKClient;
  experimentKey: string;
  userId: string;

  constructor(payload: Payload) {
    console.log('Creating new Optimizely Instance');
    this.optimizelyClient = createInstance(this.getConfig(payload.context));
    this.experimentKey = payload.experiment_key;
    this.userId = payload.user_id;
    // set Forced Variations
    // Add listeners    
    // Override UserProfileService
    // Override EventDispatcher
  }

  getConfig(context: any) : any {
    // generate and return config object based on the information in payload
    return { datafile: datafiles.get(context.datafile) }
  }

  getVariation() {
    return this.optimizelyClient.getVariation(this.experimentKey, this.userId);
  }
}
```

### OptlyWrapperFactory
This is a factory to create optimizely client instance. It maps session ids to instances to facilitate re use of instances for the requests with same session id.

```Javascript
import { Payload } from './Interfaces';
import OptlyWrapper from './OptlyWrapper';

export default class OptlyWrapperFactory {
  static instances: Map<String, OptlyWrapper> = new Map();

  static getInstance(sessionId: String, payload: Payload) {
    if(!sessionId) {
      return new OptlyWrapper(payload);
    }
    if(!this.instances.has(sessionId)) {
      this.instances.set(sessionId, new OptlyWrapper(payload));      
    }
    return this.instances.get(sessionId);
  }
}
```




  
