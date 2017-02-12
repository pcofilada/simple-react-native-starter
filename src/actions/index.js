import * as types from './types';

export function loginRequest(email, password) {
    return {
        type: types.LOGIN.REQUEST,
        email,
        password,
    }
}

export function loginSuccess({token}) {
    return {
        type: types.LOGIN.SUCCESS,
        token,
    }
}

export function loginFailure(err) {
    return {
        type: types.LOGIN.FAILURE,
        err,
    }
}

export function logout() {
    return {
        type: types.LOGOUT,
    }
}
