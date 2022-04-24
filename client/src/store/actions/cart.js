import { REMOVE_ITEM, ADD_ITEM } from './types';

export const addItem = (course) => async (dispatch) => {
  dispatch({
    type: ADD_ITEM,
    payload: course,
  });
};

export const removeItem = (course) => async (dispatch) => {
  dispatch({
    type: REMOVE_ITEM,
    payload: course,
  });
};
