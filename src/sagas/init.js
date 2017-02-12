import { take, fork, select, put } from 'redux-saga/effects'
import * as types from '../actions/types';
import { NavigationActions } from 'react-navigation';

function *watchLogoutRequest() {
  while (true) {
    const result = yield take(['LOGOUT'])
    yield put(NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Login'})]
    }))
  }
}

export default function* root() {
  yield fork(watchLogoutRequest);
}
