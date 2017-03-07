import * as types from '../actions/types';
const initialState = {
    isAuthenticated: false,
    isFetching: false,
    token: '',
    errorMessage: '',
    userInfo: {},
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN.REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false
            });
        case types.LOGIN.SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                token: action.token,
                errorMessage: '',
            });
        case types.LOGIN.FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.err,
            });
        case types.LOGOUT:
            return initialState;
        default:
            return state;
    }
}
