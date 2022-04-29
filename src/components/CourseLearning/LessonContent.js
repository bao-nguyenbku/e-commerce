import styles from "./LessonContent.module.scss";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeLesson } from "../../store/actions/course";

const LessonContent = (props) => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const changeLink = (link) => {
    // e.preventDefault();
    console.log(link);
    dispatch(changeLesson(link));
    // navigate(`/learning/${link}`);
  };

  return (
    <div
      className={styles.container}
      onClick={() => {
        changeLink(props.link);
      }}
    >
      {/* <div className={styles.container}> */}
      {props.heading}
    </div>
  );
};

export default LessonContent;
