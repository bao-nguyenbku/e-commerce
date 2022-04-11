import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PaymentInfo.module.scss';
import common from '../../../styles/Common.module.scss';
const PaymentInfo = () => {
  return (
    <div className={styles['container']}>
        <p>Total:</p>
        <p>50.000đ</p>
        <Link to='/cart/checkout'>
          <button className={`${styles['checkout']} ${common['button']}`}>Checkout</button>
        </Link>
    </div>
  )
}

export default PaymentInfo