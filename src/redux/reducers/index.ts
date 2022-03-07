import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { assetReducer } from './asset';

export default combineReducers({
  authState: authReducer,
  assetState: assetReducer,
});
