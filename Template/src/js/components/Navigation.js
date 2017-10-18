import React from "react";
import { Link } from "react-router";

export default class Navigation extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <br/>
                <Link to="ExampleRoute">Example Route</Link>
            </div>
        );
    }
}