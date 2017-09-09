import { combineReducers } from 'redux';
import disk from './ducks/disk';
import network from './ducks/network';

export default combineReducers({
  disk,
  network,
});
