import React from 'react';
import './Connection.css';
import Paho from 'paho-mqtt';

class Connection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      host: 'localhost',
      port: '15675',
      isConnected: this.props.isConnected,
      isAutoDisconnected: false,
      isInputError: false,
    };
    this.setConnectionState = this.setConnectionState.bind(this);
    this.onHostChange = this.onHostChange.bind(this);
    this.onPortChange = this.onPortChange.bind(this);
  }

  setConnectionState(isConnect) {
    console.log("Submitted!")
    if (isConnect) {
        this.props.connect(this.state.host, this.state.port);
    } else {
        this.props.disconnect();
    }
  }

  onHostChange(event) {
    this.setState({host: event.target.value});
  }

  onPortChange(event) {
    // check for input error, must be number
    this.setState({port: event.target.value});
  }
 
  render() {
    const { 
      host,
      port
    } = this.state;
    const {
        isConnected,
        statusDetails,
    } = this.props;
    console.log(this.props);
    return (
        <div class="container py-2 bg-light border rounded">
            <div class="form-group row">
                <label for="basic-url" class="col-sm-auto col-form-label">Host</label>
                <div class="col-sm">
                    <input
                        class="form-control"
                        id="basic-url"
                        type="text" 
                        value={host} 
                        readOnly={isConnected} 
                        onChange={this.onHostChange}/>
                </div>            
                <label for="basic-url" class="col-sm-auto col-form-label">Port</label>
                <div class="col-sm-2">
                    <input 
                        type="number" 
                        class="form-control" 
                        id="basic-url" 
                        value={port} 
                        readOnly={isConnected} 
                        onChange={this.onPortChange}
                        aria-describedby="basic-addon3"/>
                </div>
            </div>
            <div class="form-group row">
              <div class="col-md-auto">
                <div class={"circle pl-1 " + (isConnected? "connected" : "disconnected")}></div>
              </div>
                <div class="col-md no-left-padding">
                  <input 
                    type="text"
                    class="form-control-plaintext"
                    value={statusDetails}
                    readOnly
                  />
                </div>
                <div class="col-md-auto">
                    <button 
                        class="btn btn-primary" 
                        onClick={() => this.setConnectionState(!isConnected)}>
                        {isConnected ? "Disconnect" : "Connect"}
                    </button>
                </div>
            </div>
            </div>
    //     <Row>
    //         <label>Host</label>
    //         <InputGroup className="mb-3">
    //             <Form.Control 
    //                 id="basic-url" 
    //                 aria-describedby="basic-addon3" 
    //                 value={host} 
    //                 type="text" 
    //                 placeholder="Enter host" 
    //                 readOnly={isConnected} 
    //                 onChange={this.onHostChange}/>
    //         </InputGroup>
    //     </Row>
    //   <Form>
    //     <Form.Row>
    //         <Form.Group as={Col} controlId="formGridHost">
    //         <Form.Label>Host</Form.Label>
    //         <Form.Control value={host} type="text" placeholder="Enter host" readOnly={isConnected} onChange={this.onHostChange}/>
    //         </Form.Group>

    //         <Form.Group as={Col} controlId="formGridPort">
    //         <Form.Label>Port</Form.Label>
    //         <Form.Control value={port} type="number" placeholder="Enter port" readOnly={isConnected} onChange={this.onPortChange}/>
    //         </Form.Group>
    //     </Form.Row>
    //     <Form.Row>
    //         <Col><div id="connectionStatus">{statusDetails}</div></Col>
    //         <Col>          
    //             <Button variant="primary" type="submit" onClick={() => this.setConnectionState(!isConnected)}>
    //                 { isConnected ? "Disconnect" : "Connect" }        
    //             </Button>
    //         </Col>
    //     </Form.Row>
    //     </Form>
    );
  }
}

export default Connection;