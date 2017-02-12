import { combineReducers } from 'redux';
import BaseNavigation from '../Router';
import user from './user';

export default combineReducers({
  nav: (state, action) => BaseNavigation.router.getStateForAction(action, state),
  state: (state = {}) => state,
  user,
});
