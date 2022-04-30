import { combineReducers } from 'redux';
import course from './course';
import cart from './cart';
import user from './user';
const rootReducer = combineReducers({
  course,
  cart,
  user,
});
export default rootReducer;
