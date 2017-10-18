import React from "react";
import { connect } from 'react-redux';
import Navigation from "./Navigation";

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                {this.props.children}
            </div>
        );
    }
}