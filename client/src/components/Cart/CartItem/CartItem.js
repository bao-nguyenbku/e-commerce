import React from 'react';
import styles from './CartItem.module.scss';
import img from '../../../images/GIAI-TICH-2-1.jpg';

const CartItem = () => {
  return (
    <div className={styles['container']}>
      <img src={img} alt="thumbnail" />
      <div className={styles['description']}>
        <p>Complete Angular Developer in 2022: Zero to Mastery</p>
        <p>By ConceptCourse</p>
      </div>
      <div className={styles['price-action']}>
        <p>23.560đ</p>
        <button className={styles['remove']}>Remove</button>
      </div>
    </div>
  )
}

export default CartItem