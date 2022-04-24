import {
  GET_COURSES,
  GET_COURSE,
  COURSE_ERROR,
  CHANGE_LINK,
} from "../actions/types.js";

const initialState = {
  courses: [],
  course: null,
  loading: true,
  error: {},

  // Hung
  learningLink: "",
};

const courseReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_COURSES:
      return {
        ...state,
        courses: payload,
        loading: false,
      };
    case GET_COURSE:
      return {
        ...state,
        course: payload,
        loading: false,
      };
    case COURSE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CHANGE_LINK:
      return {
        ...state,
        learningLink: payload,
      };
    default:
      return state;
  }
};

export default courseReducer;
