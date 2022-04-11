import React from 'react';
import styles from './OrderList.module.scss';
import img from '../../../../images/GIAI-TICH-2-1.jpg';

const OrderList = () => {
  return (
    <div className={styles['order']}>
      <div className={styles['description']}>
        <img src={img} alt="" />
        <p>Complete Angular Developer in 2022: Zero to Mastery</p>
      </div>
      <span>24.000đ</span>
    </div>

  )
}

export default OrderList;