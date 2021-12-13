import { combineReducers } from 'redux';
import dataReducer from './reducer';

export default combineReducers({
  dicData: dataReducer
});