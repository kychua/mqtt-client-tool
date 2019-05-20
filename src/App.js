import React from 'react';
import './App.css';
import Paho from 'paho-mqtt';
import Connection from './Connection';
import Publisher from './Publisher';
import Messages from './Messages';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
      statusDetails: 'Disconnected',
      messages: [],
      publishErrorMessage: '',
    };
    this.client = null;

    this.handleConnectionSuccess = this.handleConnectionSuccess.bind(this);
    this.handleConnectionFailure = this.handleConnectionFailure.bind(this);
    this.handleConnectionLost = this.handleConnectionLost.bind(this);
    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
    this.publishMessage = this.publishMessage.bind(this);
  }

  connect(host, port) {
    this.client = new Paho.Client(host, Number(port), "/ws", "clientId");
    this.client.onConnectionLost = (error) => this.handleConnectionLost(error);
    this.client.onMessageArrived = (msg) => this.handleMessageArrived(msg);
    this.client.connect({
      onSuccess: this.handleConnectionSuccess,
      onFailure: this.handleConnectionFailure,
    });

  }

  disconnect() {
    this.client.disconnect();
    this.setState({
      isConnected: false,
      statusDetails: 'Disconnected',
    })

  }

  handleConnectionSuccess() {
    console.log("Connected!");
    this.client.subscribe("#");
    this.setState({
      isConnected: true,
      statusDetails: 'Connected',
    });      
  }

  handleConnectionFailure(error) {
    console.log("Connection failed!");
    this.setState({
      isConnected: false,
      statusDetails: 'Connection failed: ' + error.errorMessage,
    });
  }

  handleConnectionLost(error) {
    console.log("Connection lost!", error);
    this.setState({
      isConnected: false,
      statusDetails: 'Connection lost: ' + error.errorMessage,
    });
  }

  handleMessageArrived(message) { 
    console.log("Received:", message);
    const messageEntry = {
      topic: message.destinationName,
      content: message.payloadString,
      timestamp: Date.now(),
    }
    this.setState({
      messages: [messageEntry, ...this.state.messages]
    });
  }

  publishMessage(message) {
    try {
      this.client.send(message);
      this.setState({publishErrorMessage: ''});
    } catch (error) {
      this.setState({publishErrorMessage: 'Error: ' + error.message});
    }
  }
 
  render() {
    const { 
      isConnected,
      statusDetails,
      messages,
      publishErrorMessage,
    } = this.state;
    return (
      <div className="App">
        <div class="pb-2 pt-2 mb-2 border-bottom bg-secondary text-light">
          <div class="container">
            <h3>MQTT Client Tool</h3>
          </div>
        </div>
        <Connection
         isConnected={isConnected}
         statusDetails={statusDetails}
         connect={this.connect}
         disconnect={this.disconnect}></Connection>
         <Publisher
          publishMessage={this.publishMessage}
          publishErrorMessage={publishErrorMessage}
          isConnected={isConnected}></Publisher>
          <Messages
          messages={messages}></Messages>
      </div>
    );
  }
}

export default App;