import { combineReducers } from 'redux';
import authReducer from './auth';
import modalReducer from './modal';

const rootReducers = combineReducers({
  auth: authReducer,
  modal: modalReducer
});

export default rootReducers;
