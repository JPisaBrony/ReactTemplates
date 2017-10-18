import React from "react";
import { connect } from 'react-redux';
import $ from 'jquery';
window.jQuery = $;

export default class Home extends React.Component {
    componentWillMount() {
        var connection = $.hubConnection("http://localhost:8081/");
        this.hub = connection.createHubProxy("examplehub");

        connection.start().done(() => {
            console.log("Signalr started");
            this.hub.invoke("ExampleMethod", "example method invoke");
        });

        this.hub.on('examplemsg', (msg) => {
            console.log(msg);
        });
    }

    render() {
        return (
            <div>
                <h1>HOME</h1>
            </div>
        );
    }
}