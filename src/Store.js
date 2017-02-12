import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import reducers from './reducers';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
import createSagaMiddleware from 'redux-saga';
import Sagas from './sagas';

 //CONST REDUX LOGGER
const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
})

export default function configureStore(onComplete) {
  const engine = createEngine('AppTree');
  const storeMiddleware = storage.createMiddleware(engine);
  const sagaMiddleware = createSagaMiddleware();
  let store = createStore(
    storage.reducer(reducers), //PERSIST REDUX STATE TO DISK
      compose(
      applyMiddleware(
        sagaMiddleware,
        storeMiddleware,
        logger
      )
    )
  )

  if (isDebuggingInChrome) {
    window.store = store;
  }

  const load = storage.createLoader(engine);
  load(store)
    .then(onComplete)
    .catch((ex) => console.log('Failed to load previous state', ex));
    sagaMiddleware.run(Sagas);
    return store;
}
