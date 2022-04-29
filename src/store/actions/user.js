import { LOGIN, LOGGOUT } from "./types";
import users from '../../api/user.json';
export const login = (user) => {
    const currentUser = users.users.filter(u => u.email === user.email && u.password === user.password);
    if (currentUser.length === 1) {
        return {
            type: LOGIN,
            payload: user
        }
    }
    else {
        return {
            type: LOGIN,
            payload: { msg: 'Account does not existed' }
        }
    }
}