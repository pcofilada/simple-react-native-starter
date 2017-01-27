import { combineReducers } from 'redux';
import { NavigationReducer } from '@exponent/ex-navigation';

export default combineReducers({
  navigation: NavigationReducer,
  state: (state = {}) => state,
});
