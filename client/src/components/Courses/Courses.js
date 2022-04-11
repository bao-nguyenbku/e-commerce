import React from 'react';
import Course from './Course/Course.js';
import styles from './Courses.module.scss';
import { useSelector } from 'react-redux';
// import coursesData from '../../api/courses.json';

const Courses = () => {
  const coursesData = useSelector((state) => state.course.courses);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['title']}>
        <h2>Courses for you</h2>
      </div>
      <div className={styles['container']}>
        {coursesData.map((course) => {
          return <Course key={course.id} course={course} />;
        })}
      </div>
    </div>
  );
};

export default Courses;
