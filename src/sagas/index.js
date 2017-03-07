import { fork } from 'redux-saga/effects'
import init from './init';
import login from './login';

export default function* root() {
  yield [
      fork(init),
      fork(login),
  ];
}
