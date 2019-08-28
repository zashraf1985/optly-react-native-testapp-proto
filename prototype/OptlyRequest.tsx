import React from 'react';
import { 
  OptimizelyProvider,
  OptimizelyExperiment,
  OptimizelyFeature,
} from '@optimizely/react-sdk';
import { Payload } from './Interfaces';
import OptlyWrapper from './OptlyWrapper';
import OptlyWrapperFactory from './OptlyWrapperFactory';

interface OptlyRequestProps {
  callApi: String,
  payload: Payload,
  completionHandler: Function,
};

export default class OptlyRequest extends React.Component<OptlyRequestProps> {
  optlyInstance: OptlyWrapper;

  constructor(props: OptlyRequestProps) {
    super(props);
    console.log('Initializing OptimizelyComponent');
    this.optlyInstance = OptlyWrapperFactory.getInstance(props.payload.context.session_id, props.payload);
  }

  onComplete(result: any) {
    // Build response here. add context, dispatchers, listerners called etc to the final object
    const response = {
      result,
    }
    setTimeout(() => this.props.completionHandler(response));
  }

  render() {
    console.log('Rendering OptimizelyComponent');
    const { payload } = this.props;
    return( 
      <OptimizelyProvider 
        optimizely={ this.optlyInstance.optimizelyClient }
        user={{ 
          id: payload.user_id,
          attributes: payload.attributes,
        }}>
        { this.callAPIMethod() }
      </OptimizelyProvider>
    )
  }

  // Preventing unwanted rerender of component if parent rerenders for some reason.
  shouldComponentUpdate(nextProps) {
    return nextProps !== null && nextProps != this.props
  }

  callAPIMethod() {
    const { callApi, payload } = this.props;
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
}
