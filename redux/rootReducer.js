import { combineReducers } from "redux";
import {configReducer} from './configReducer';

export const rooReducer=combineReducers({
    config :  configReducer,
});