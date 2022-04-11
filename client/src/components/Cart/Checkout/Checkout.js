import React from 'react';
import styles from './Checkout.module.scss';
import paypal from '../../../images/paypal-logo.png';

import OrderList from './OrderList/OrderList';
const Checkout = () => {
  return (
    <div className={styles['background']}>
      <div className={styles['container']}>
        <div className={styles['overview']}>
          <p>Checkout</p>
          <div className={styles['billing-address']}>
            <p className={styles['title']}>Address</p>
            <select name="" id={styles["country-select"]}>
              <option value="vietnam">Vietnam</option>
              <option value="usa">USA</option>
            </select>
          </div>
          <div className={styles['payment-method']}>
            <p className={styles['title']}>Payment method</p>
            <div className={styles['method-container']}>
              <div className={styles['method-panel']}>
                <input type="radio" id='paypal' />
                <label htmlFor="paypal">
                  <img src={paypal} alt="" />
                  <p>PayPal</p>
                </label>
              </div>
              <div className={styles['content']}>
                <p>In order to complete your transaction, we will transfer you over to PayPal's secure servers.</p>
              </div>
            </div>
          </div>
          <div className={styles['orders']}>
            <p className={styles['title']}>Order Summary</p>
            <div className={styles['order-list']}>
              <OrderList />
              <OrderList />
            </div>
          </div>
        </div>
        <div className={styles['summary-background']}>
          <div className={styles['summary']}>
            <p className={styles['title']}>Summary</p>
            <hr />
            <div className={styles['total']}>
              <span>Total:</span>
              <span>450.340đ</span>
            </div>
            <button className={styles['proceed']}>Proceed</button>
            <p className={styles['terms-of-service']}>By completing your purchase you agree with <strong>Terms of service</strong>.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout