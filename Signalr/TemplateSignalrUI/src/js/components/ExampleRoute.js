import React from "react";
import { connect } from 'react-redux';
import * as exampleActions from "../actions/exampleActions";

@connect((store) => {
    return {
        settings: store.settings.settings
    };
})
export default class ExampleRoute extends React.Component {
    componentWillMount() {
        this.props.dispatch(exampleActions.exampleAction("example payload"));
    }

    render() {
        return (
            <div >
                <h1>EXAMPLE ROUTE</h1>
                <div>{this.props.settings.exampleSetting}</div>
            </div>
        );
    }
}