import React from "react";
import { connect } from 'react-redux';
import Navigation from "./Navigation";

export default class Layout extends React.Component {
    componentWillMount() {
        var connection = new signalR.HubConnection('http://localhost:8081/examplehub');
		
		connection.on('examplesend', data => {
			console.log(data);
		});
		
		connection.start().then(() => {
			console.log("SignalR started");
			connection.invoke('ExampleSendAll', 'example send all');
			connection.invoke('ExampleSendCaller', 'example send caller');
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