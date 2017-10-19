import React from "react";
import { Link } from "react-router";

export default class Navigation extends React.Component {
    render() {
        return (
            <div style={{ paddingTop: 10, fontSize: 20 }}>
                <div class="row">
                    <div class="col-md-12">
                        <Link to="/">Home</Link>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <Link to="ExampleRoute">Example Route</Link>
                    </div>
                </div>
            </div>
        );
    }
}