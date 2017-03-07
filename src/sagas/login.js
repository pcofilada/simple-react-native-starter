import { take, put, call, fork } from 'redux-saga/effects'
import * as types from '../actions/types';
import { loginFailure, loginSuccess } from '../actions/index';
import { NavigationActions } from 'react-navigation';

let loginData = {};
function loginCall({email, password}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === 'password') {
          loginData = {
            token: '0123456789',
          };
          resolve(loginData);
      } else {
          reject({status: 'Password is wrong!'});
      }
    }, 1000);
  })
}

function *watchLoginRequest() {
  while (true) {
    const { email, password } = yield take(types.LOGIN.REQUEST);
    try {
      const payload = {
        email,
        password,
      }
      const response = yield call(loginCall, payload);
      yield put(loginSuccess(response));
      yield put(NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Main'})]
      }))
    } catch (err) {
      yield put(loginFailure(err.status));
    }
  }
}

export default function* root() {
  yield fork(watchLoginRequest);
}
