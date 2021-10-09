import { combineReducers } from "redux";
import {configReducer} from './configReducer';
import {planReducer} from './planReducer';

export const rooReducer=combineReducers({
    config :  configReducer,
    plan: planReducer,
});