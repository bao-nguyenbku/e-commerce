import { LOGIN, LOGGOUT } from "../actions/types";

const initState = {
    isLogin: false,
    email: '',
    password: ''
}

const loginReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN:
            return {
                ...state,
                isLogin: true,
                email: payload.email,
                password: payload.password
            }
        case LOGGOUT:
            return state;
        default:
            return state;
    }
}

export default loginReducer;