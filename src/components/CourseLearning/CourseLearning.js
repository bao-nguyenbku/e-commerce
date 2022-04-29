import React from "react";
import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

import CourseCollapse from "./CourseCollapse";

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
