import { combineReducers } from "redux";
import settings from "./settingsReducer";
import example from "./exampleReducer";

export default combineReducers({
    example,
    settings
});