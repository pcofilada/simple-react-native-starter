import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createNavigationEnabledStore } from '@exponent/ex-navigation';

import reducers from './reducers';

const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation',
});
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStoreWithNavigation);
const store = createStoreWithMiddleware(reducers);

export default store;
