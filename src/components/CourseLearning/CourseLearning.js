import React from "react";
import ReactPlayer from "react-player";
import CourseCollapse from "./CourseCollapse";
import { useSelector } from "react-redux";
import styles from "./CourseLearning.module.scss";

const CourseLearning = () => {
  const { learningLink } = useSelector((state) => state.course);

  return (
    <React.Fragment>
      <div className={styles.parent}>
        <div className={styles.div1}>
          <ReactPlayer
            width="100%"
            height="100%"
            // url="https://www.youtube.com/watch?v=mwIgYVPBHSc&list=PL5g_dfwUnO86OCC5xn_grgnH-lqdYWGUu"
            url={learningLink}
            controls={true}
          />
        </div>
        <div className={styles.div2}>
          <CourseCollapse />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CourseLearning;
