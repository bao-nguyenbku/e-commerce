import React from 'react';
import Course from './Course/Course.js';
import styles from './Courses.module.scss';
import coursesData from '../../api/courses.json';
const Courses = () => {
 
  return (
    <div className={styles['wrapper']}>
      <div className={styles['title']}>
        <h2>Courses for you</h2>
      </div>
      <div className={styles['container']}>
        {coursesData.courses.map(course => {
          return (<Course key={course.id} course={course}/>)
        })}
      </div>
    </div>
  )
}

export default Courses