import React from "react";
import { connect } from 'react-redux';
import $ from 'jquery';
import rg4js from 'raygun4js';
window.jQuery = $;
rg4js('apiKey', '4etCaOLJCkmBxvyzCTJ7Nw==');
rg4js('enableCrashReporting', true);
rg4js('enablePulse', true);
rg4js('trackEvent', { type: 'pageView', path: '/' });

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>HOME</h1>
            </div>
        );
    }
}
