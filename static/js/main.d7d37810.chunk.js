(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){},14:function(e,t,n){e.exports=n(23)},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);n(15);var a=n(0),s=n.n(a),o=n(11),c=n.n(o),i=(n(20),n(13)),r=n(2),l=n(3),u=n(5),d=n(4),h=n(1),m=n(6),b=(n(10),n(7)),p=n.n(b),g=(n(21),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={host:"localhost",port:"15675",isConnected:n.props.isConnected,isAutoDisconnected:!1,isInputError:!1},n.setConnectionState=n.setConnectionState.bind(Object(h.a)(n)),n.onHostChange=n.onHostChange.bind(Object(h.a)(n)),n.onPortChange=n.onPortChange.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"setConnectionState",value:function(e){console.log("Submitted!"),e?this.props.connect(this.state.host,this.state.port):this.props.disconnect()}},{key:"onHostChange",value:function(e){this.setState({host:e.target.value})}},{key:"onPortChange",value:function(e){this.setState({port:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state,n=t.host,a=t.port,o=this.props,c=o.isConnected,i=o.statusDetails;return console.log(this.props),s.a.createElement("div",{class:"container py-2 bg-light border rounded"},s.a.createElement("div",{class:"form-group row"},s.a.createElement("label",{for:"basic-url",class:"col-sm-auto col-form-label"},"Host"),s.a.createElement("div",{class:"col-sm"},s.a.createElement("input",{class:"form-control",id:"basic-url",type:"text",value:n,readOnly:c,onChange:this.onHostChange})),s.a.createElement("label",{for:"basic-url",class:"col-sm-auto col-form-label"},"Port"),s.a.createElement("div",{class:"col-sm-2"},s.a.createElement("input",{type:"number",class:"form-control",id:"basic-url",value:a,readOnly:c,onChange:this.onPortChange,"aria-describedby":"basic-addon3"}))),s.a.createElement("div",{class:"form-group row"},s.a.createElement("div",{class:"col-md-auto"},s.a.createElement("div",{class:"circle pl-1 "+(c?"connected":"disconnected")})),s.a.createElement("div",{class:"col-md no-left-padding"},s.a.createElement("input",{type:"text",class:"form-control-plaintext",value:i,readOnly:!0})),s.a.createElement("div",{class:"col-md-auto"},s.a.createElement("button",{class:"btn btn-primary",onClick:function(){return e.setConnectionState(!c)}},c?"Disconnect":"Connect"))))}}]),t}(s.a.Component)),v=n(12),f=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={topic:"",content:""},n.onInputChange=n.onInputChange.bind(Object(h.a)(n)),n.publishMessage=n.publishMessage.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onInputChange",value:function(e,t){this.setState(Object(v.a)({},e,t.target.value))}},{key:"publishMessage",value:function(){var e=new p.a.Message(this.state.content);e.destinationName=this.state.topic,this.props.publishMessage(e)}},{key:"render",value:function(){var e=this,t=this.state,n=t.topic,a=t.content;return s.a.createElement("div",{class:"container py-2 my-2 bg-light border rounded"},s.a.createElement("div",{class:"form-group row"},s.a.createElement("label",{for:"basic-url",class:"col-sm-2 col-form-label"},"Topic"),s.a.createElement("div",{class:"col-sm"},s.a.createElement("input",{class:"form-control",id:"basic-url",type:"text",value:n,onChange:function(t){return e.onInputChange("topic",t)},readOnly:!this.props.isConnected}))),s.a.createElement("div",{class:"form-group row"},s.a.createElement("label",{for:"basic-url",class:"col-sm-2 col-form-label"},"Message"),s.a.createElement("div",{class:"col-sm"},s.a.createElement("textarea",{class:"form-control",id:"basic-url",value:a,onChange:function(t){return e.onInputChange("content",t)},readOnly:!this.props.isConnected}))),s.a.createElement("div",{class:"form-group row"},s.a.createElement("div",{class:"col"},this.props.publishErrorMessage),s.a.createElement("div",{class:"col-md-auto"},s.a.createElement("button",{class:"btn btn-primary",onClick:this.publishMessage,disabled:!this.props.isConnected},"Publish"))))}}]),t}(s.a.Component);n(22);function C(e){return e<10?"0"+e:e}var E=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{class:"container border rounded mb-2"},s.a.createElement("span",null,"Received messages"),this.props.messages.map(function(e){var t=e.topic,n=e.content,a=e.timestamp;return s.a.createElement("div",{class:"row my-1 pr-3"},s.a.createElement("div",{class:"col-md-auto text-muted timestamp"},function(e){return[(e=new Date(e)).getHours(),e.getMinutes(),e.getSeconds()].map(function(e){return C(e)}).join(":")}(a)),s.a.createElement("div",{class:"col-md-4 border bg-light hide-overflow rounded-left"},t),s.a.createElement("div",{class:"col-md border hide-overflow rounded-right "},n))}))}}]),t}(s.a.Component),y=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={isConnected:!1,statusDetails:"Disconnected",messages:[],publishErrorMessage:""},n.client=null,n.handleConnectionSuccess=n.handleConnectionSuccess.bind(Object(h.a)(n)),n.handleConnectionFailure=n.handleConnectionFailure.bind(Object(h.a)(n)),n.handleConnectionLost=n.handleConnectionLost.bind(Object(h.a)(n)),n.connect=n.connect.bind(Object(h.a)(n)),n.disconnect=n.disconnect.bind(Object(h.a)(n)),n.publishMessage=n.publishMessage.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"connect",value:function(e,t){var n=this;this.client=new p.a.Client(e,Number(t),"/ws","clientId"),this.client.onConnectionLost=function(e){return n.handleConnectionLost(e)},this.client.onMessageArrived=function(e){return n.handleMessageArrived(e)},this.client.connect({onSuccess:this.handleConnectionSuccess,onFailure:this.handleConnectionFailure})}},{key:"disconnect",value:function(){this.client.disconnect(),this.setState({isConnected:!1,statusDetails:"Disconnected"})}},{key:"handleConnectionSuccess",value:function(){console.log("Connected!"),this.client.subscribe("#"),this.setState({isConnected:!0,statusDetails:"Connected"})}},{key:"handleConnectionFailure",value:function(e){console.log("Connection failed!"),this.setState({isConnected:!1,statusDetails:"Connection failed: "+e.errorMessage})}},{key:"handleConnectionLost",value:function(e){console.log("Connection lost!",e),this.setState({isConnected:!1,statusDetails:"Connection lost: "+e.errorMessage})}},{key:"handleMessageArrived",value:function(e){console.log("Received:",e);var t={topic:e.destinationName,content:e.payloadString,timestamp:Date.now()};this.setState({messages:[t].concat(Object(i.a)(this.state.messages))})}},{key:"publishMessage",value:function(e){try{this.client.send(e),this.setState({publishErrorMessage:""})}catch(t){this.setState({publishErrorMessage:"Error: "+t.message})}}},{key:"render",value:function(){var e=this.state,t=e.isConnected,n=e.statusDetails,a=e.messages,o=e.publishErrorMessage;return s.a.createElement("div",{className:"App"},s.a.createElement("div",{class:"pb-2 pt-2 mb-2 border-bottom bg-secondary text-light"},s.a.createElement("div",{class:"container"},s.a.createElement("h3",null,"MQTT Client Tool"))),s.a.createElement(g,{isConnected:t,statusDetails:n,connect:this.connect,disconnect:this.disconnect}),s.a.createElement(f,{publishMessage:this.publishMessage,publishErrorMessage:o,isConnected:t}),s.a.createElement(E,{messages:a}))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.d7d37810.chunk.js.map