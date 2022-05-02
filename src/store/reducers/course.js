import {
  GET_COURSES,
  GET_COURSE,
  COURSE_ERROR,
  CHANGE_LINK,
  GET_PURCHASED_COURSE
} from "../actions/types.js";

const initialState = {
  courses: [],
  course: null,
  loading: true,
  error: {},
  purchased: [],
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
    case GET_PURCHASED_COURSE:
      return {
        ...state,
        loading: false,
        purchased: payload
      }
    default:
      return state;
  }
};

export default courseReducer;
