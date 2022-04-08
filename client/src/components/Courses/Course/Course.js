import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Course.module.scss';
const Course = ({ course }) => {
  return (
    <Link to={`/course/${course.id}`}>
      <div className={styles['container']}>
          <img src={require(`../../../images/${course.image}`)} alt="thumb" />
          <div className={styles['info']}>
            <span>{course.name}</span>
            <span>Củng cố kiến thức nền tảng</span>
            <span>20.000đ</span>
          </div>
      </div>
    </Link>
  )
}

export default Course