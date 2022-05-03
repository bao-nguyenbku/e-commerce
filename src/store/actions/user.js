import { LOGIN, LOGOUT } from "./types";
import users from '../../api/user.json';
export const login = (user) => {
    const currentUser = users.users.find(u => u.email === user.email && u.password === user.password);
    if (currentUser !== undefined) {
        return {
            type: LOGIN,
            payload: {...currentUser, isLogin: true }
        }
    }
    else {
        return {
            type: LOGIN,
            payload: { isLogin: false, msg: 'Account does not existed' }
        }
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
        payload: { isLogin: false }
    }
}