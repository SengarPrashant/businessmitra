import {createStore} from 'redux';
import { rooReducer } from './rootReducer';


export const store=createStore(rooReducer);