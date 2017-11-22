import React from "react";
import { connect } from 'react-redux';
import $ from 'jquery';
window.jQuery = $;

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>HOME</h1>
            </div>
        );
    }
}