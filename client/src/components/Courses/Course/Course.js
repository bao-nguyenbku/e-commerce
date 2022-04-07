import React from 'react';
import styles from './Course.module.scss';
const Course = ({ course }) => {
  // import thumbnail from `../../../images/${course.image}`;
  return (
    <div className={styles['container']}>
        <img src={require(`../../../images/${course.image}`)} alt="thumb" />
        <div className={styles['info']}>
          <span>{course.name}</span>
          <span>Củng cố kiến thức nền tảng</span>
          <span>20.000đ</span>
        </div>
    </div>
  )
}

export default Course