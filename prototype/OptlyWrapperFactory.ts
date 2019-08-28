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