import { REMOVE_ITEM, ADD_ITEM } from '../actions/types';

const initState = {
  items: [],
  quantity: 0,
  total: 0,
};

const cartReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM: {
      if (state.items.filter((item) => item.id === payload.id).length > 0) {
        return state;
      } else {
        return {
          ...state,
          items: [payload, ...state.items],
          quantity: state.quantity + 1,
          total: state.total + payload.price,
        };
      }
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload.id),
        quantity: state.quantity - 1,
        total: state.total - payload.price,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
