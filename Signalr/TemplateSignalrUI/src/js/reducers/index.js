import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';
import settings from "./settingsReducer";
import example from "./exampleReducer";

export default combineReducers({
    example,
    settings,
    router: routerReducer
});