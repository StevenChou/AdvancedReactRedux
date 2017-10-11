import { combineReducers } from 'redux';
import authenticationReducer from './authenticate';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  authenticated: authenticationReducer
});

export default rootReducer;
