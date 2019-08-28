import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import OptlyRequest from './OptlyRequest'; 
import { sampleRequests } from './data/SampleRequests';

interface MainScreenState {
  currentRequest: any,
  responseJSON: string,
}

export default class MainScreen extends React.Component<{}, MainScreenState> {  
  requests: any[];
  currentRequestIndex: number = -1;
  responses: any[] = [];

  constructor(props:any) {
    super(props);
    // This will eventually be loaded from the JSON file uploaded by mobile e2e server
    this.requests = sampleRequests;
    this.state = { currentRequest: null, responseJSON: '' }
  }

  loadRequestJSON() {
    // Loads Request JSON Array from the url set in "txtRequestURL" text input field by mobile e2e.
    // The JSON contains array of Requests from FSC Suite.
  }

  hasNextRequest = () => {
    return this.currentRequestIndex < this.requests.length - 1;
  }

  processNextRequest = () => {
    this.setState(
      { currentRequest: null }, 
      () => this.setState({ currentRequest: this.requests[++this.currentRequestIndex] }),
    )    
  }

  processRequests = () => {
    //this.loadRequestJSON();
    if(this.hasNextRequest()) {
      this.processNextRequest();
    }
  }

  onRequestComplete = (result) => {
    this.responses.push(result)
    if(this.hasNextRequest()) {
      this.processNextRequest();
    } else {
      this.setState({ 
        currentRequest:null, 
        responseJSON: JSON.stringify(this.responses),
      });
    }
  }
  
  render() {
    const { currentRequest, responseJSON } = this.state;
    return (
      <View>
        <TextInput testID="txtRequestURL" />
        <Text testID="tvResponseJSON">{ responseJSON }</Text>
        <Button testID="btnCallAPI" title="Call API" onPress={ this.processRequests }/>
        <View style={{ display: "none" }}>
          { currentRequest &&
            <OptlyRequest 
              callApi={ currentRequest.call_api } 
              payload={ currentRequest.body.payload }
              completionHandler={ this.onRequestComplete }
            />
          }
        </View>
      </View>
    )
  }
}
