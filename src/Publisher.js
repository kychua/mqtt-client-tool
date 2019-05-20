import React from 'react';
import './App.css';
import Paho from 'paho-mqtt';

class Publisher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: '',
            content: '',
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.publishMessage = this.publishMessage.bind(this);
    }

    onInputChange(property, event) {
        this.setState({[property]: event.target.value});
    }

    publishMessage() {
        const message = new Paho.Message(this.state.content);
        message.destinationName = this.state.topic;
        this.props.publishMessage(message);
    }

    render() {
            const { 
              topic,
              content,
            } = this.state;
            return (
                <div class="container py-2 my-2 bg-light border rounded">
                    <div class="form-group row">
                        <label for="basic-url" class="col-sm-2 col-form-label">Topic</label>
                        <div class="col-sm">
                        <input
                            class="form-control"
                            id="basic-url"
                            type="text" 
                            value={topic} 
                            onChange={(event) => this.onInputChange('topic', event)}
                            readOnly={!this.props.isConnected}    
                        />
                        </div>
                </div>
                <div class="form-group row">
                   <label for="basic-url" class="col-sm-2 col-form-label">Message</label>
                    <div class="col-sm">
                        <textarea 
                            class="form-control"
                            id="basic-url" 
                            value={content} 
                            onChange={(event) => this.onInputChange('content', event)}
                            readOnly={!this.props.isConnected}    
                        ></textarea>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col">{this.props.publishErrorMessage}</div>
                    <div class="col-md-auto">
                        <button 
                            class="btn btn-primary" 
                            onClick={this.publishMessage}
                            disabled={!this.props.isConnected}>
                            Publish
                        </button>
                    </div>
                </div>
                </div>
            );
          }

    }

export default Publisher;