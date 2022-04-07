import React from 'react';
import banner from '../../images/Course app-rafiki.svg';
import styles from './Banner.module.scss';
const Banner = () => {
  return (
    <div className={styles['wrapper']}>
        <div className={styles['title']}>
            <p>Effective. Inspirational.</p>
        </div>
        <div>
            <img src={banner} alt="banner" />
        </div>
    </div>
  )
}

export default Banner