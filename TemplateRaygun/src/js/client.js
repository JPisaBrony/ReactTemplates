import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import "../style.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import "toastr/build/toastr.min.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import ExampleRoute from "./components/ExampleRoute";
import store from "./store";
import 'bootstrap/dist/js/bootstrap.min.js';

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path="ExampleRoute" component={ExampleRoute}></Route>
            </Route>
        </Router>
    </Provider>,
app);