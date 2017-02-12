//CONST REQUEST TYPES FOR LOGIN
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createRequestTypes(base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE].forEach(type => res[type] = `${base}_${type}`);
  return res;
}

//LOGIN ACTIONS
export const LOGIN = createRequestTypes('LOGIN');
export const LOGOUT = 'LOGOUT';
