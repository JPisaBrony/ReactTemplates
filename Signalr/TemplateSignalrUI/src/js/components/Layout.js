import React from "react";
import { connect } from 'react-redux';
import Navigation from "./Navigation";
import $ from 'jquery';
window.jQuery = $;

export default class Layout extends React.Component {
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
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2">
                        <Navigation />
                    </div>
                    <div class="col-md-8" style={{ textAlign: 'center' }}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}