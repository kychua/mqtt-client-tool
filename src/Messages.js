import React from 'react';
import './Messages.css';

class Messages extends React.Component {
    render() {
        return (
            <div class="container border rounded mb-2">
                <span>Received messages</span>
                {this.props.messages.map(({topic, content, timestamp}) =>
                <div class="row my-1 pr-3">
                    <div class="col-md-auto text-muted timestamp">
                        {getPrettyTime(timestamp)}
                    </div>
                    <div class="col-md-4 border bg-light hide-overflow rounded-left">
                        {topic}
                    </div>
                    <div class="col-md border hide-overflow rounded-right ">
                        {content}
                    </div>
                </div>
                // <div>
                //     <div class="row">
                //     <div class="col-md-3 text-muted text-center timestamp">
                //         {getPrettyTime(timestamp)} {getPrettyDate(timestamp)}
                //     </div>
                //     <div class="col-md hide-overflow">{topic}</div>
                // </div>
                // <div class="row">
                //     <div class="col-md-3 text-muted text-center timestamp">
                //     </div>
                //     <div class="col-md-9 hide-overflow">{content}</div>
                // </div>
                // </div>
                )}
            </div>
        );
    }
}

function toDoubleDigit(number) {
    return number < 10 ? "0" + number : number;
}

function prettifyTimestamp(timestamp) {
    timestamp = new Date(timestamp);
    const  date = [timestamp.getDate(), timestamp.getMonth() + 1, timestamp.getFullYear() - 2000].join("/");   
    const time = [timestamp.getHours(), timestamp.getMinutes(), timestamp.getSeconds()].map(num => toDoubleDigit(num)).join(":");
    return time + " " + date;
}

function getPrettyTime(timestamp) {
    timestamp = new Date(timestamp);
    const time = [timestamp.getHours(), timestamp.getMinutes(), timestamp.getSeconds()].map(num => toDoubleDigit(num)).join(":");
    return time;
}

function getPrettyDate(timestamp) {
    timestamp = new Date(timestamp);
    const  date = [timestamp.getDate(), timestamp.getMonth() + 1, timestamp.getFullYear() - 2000].join("/");   
    return date;
}

export default Messages;