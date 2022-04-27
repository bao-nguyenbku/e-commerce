import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PaymentInfo.module.scss';
import common from '../../../styles/Common.module.scss';
const PaymentInfo = ({ summary }) => {
  return (
    <div className={styles['container']}>
        <p>Total:</p>
        <p>{summary} đ</p>
        <Link to='/cart/checkout'>
          <button className={`${styles['checkout']} ${common['button']}`}>Checkout</button>
        </Link>
    </div>
  )
}

export default PaymentInfo