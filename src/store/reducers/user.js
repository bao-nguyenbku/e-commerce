import { LOGIN, LOGOUT } from "../actions/types";

const initState = {
    isLogin: false,
    email: '',
    password: '',
    name: ''
}

const loginReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN:
            return {
                ...state,
                isLogin: payload.isLogin,
                email: payload.email,
                password: payload.password,
                name: payload.name
            }
        case LOGOUT:
            return {
                ...state,
                isLogin: payload.isLogin,
                email: '',
                password: '',
                name: ''
            }
        default:
            return state;
    }
}

export default loginReducer;