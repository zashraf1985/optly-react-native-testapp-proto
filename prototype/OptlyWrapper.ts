import { createInstance, ReactSDKClient } from '@optimizely/react-sdk';
import { Payload } from './Interfaces';
import { datafiles } from './data/Datafiles';

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