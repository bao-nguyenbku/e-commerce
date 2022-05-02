import { 
  GET_COURSE, 
  GET_COURSES, 
  COURSE_ERROR, 
  CHANGE_LINK, 
  GET_PURCHASED_COURSE 
} from "./types.js";
import coursesData from "../../api/courses.json";
import purchasedData from '../../api/purchasedCourses.json';
export const getCourses = () => async (dispatch) => {
  try {
    const res = coursesData.courses;

    dispatch({
      type: GET_COURSES,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: COURSE_ERROR,
      payload: {
        msg: "Courses Not Found",
      },
    });
  }
};

export const getCourse = (id) => async (dispatch) => {
  try {
    const res = coursesData.courses.find(
      (course) => course.id === parseInt(id)
    );

    dispatch({
      type: GET_COURSE,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: COURSE_ERROR,
      payload: {
        msg: "Course Not Found",
      },
    });
  }
};

export const changeLesson = (link) => async (dispatch) => {
  try {
    // dispatch({
    //   type: CHANGE_LINK,
    //   payload: "",
    // });

    dispatch({
      type: CHANGE_LINK,
      payload: link,
    });
  } catch (error) {
    dispatch({
      type: COURSE_ERROR,
      payload: {
        msg: "Course Not Found",
      },
    });
  }
};

export const getPurchasedCourses = () => {
  return {
    type: GET_PURCHASED_COURSE,
    payload: purchasedData.courses
  }
}