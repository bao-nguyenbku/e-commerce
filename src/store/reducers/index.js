import { combineReducers } from 'redux';
import course from './course';
import cart from './cart';

const rootReducer = combineReducers({
  course,
  cart,
});
export default rootReducer;
