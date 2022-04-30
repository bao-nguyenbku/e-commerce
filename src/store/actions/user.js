import { LOGIN, LOGGOUT } from "./types";
import users from '../../api/user.json';
export const login = (user) => {
    const currentUser = users.users.find(u => u.email === user.email && u.password === user.password);
    if (currentUser != undefined) {
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