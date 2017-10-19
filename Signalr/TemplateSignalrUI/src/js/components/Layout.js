import React from "react";
import { connect } from 'react-redux';
import Navigation from "./Navigation";

export default class Layout extends React.Component {
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