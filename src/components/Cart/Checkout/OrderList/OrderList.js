import React from 'react';
import styles from './OrderList.module.scss';
import img from '../../../../images/GIAI-TICH-2-1.jpg';
import { useSelector } from 'react-redux';

const OrderList = ({ item }) => {
  return (
    <div className={styles['order']}>
      <div className={styles['description']}>
        <img src={require(`../../../../images/${item.image}`)} alt="thumb" />
        <p>{item.name}</p>
      </div>
      <span>{item.price} đ</span>
    </div>

  )
}

export default OrderList;