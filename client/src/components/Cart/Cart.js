import React from 'react';
import PaymentInfo from './PaymentInfo/PaymentInfo';
import CartItem from './CartItem/CartItem';
import styles from './Cart.module.scss';
const Cart = () => {
  return (
    <div className={styles['container']}>
        <p className={styles['title']}>Your Shopping Cart</p>
        <div className={styles['content']}>
          <div className={styles['item-list']}>
              <CartItem />
              <CartItem />
              <CartItem />
          </div>
          <div className={styles['payment-info']}>
            <PaymentInfo />
          </div>
        </div>
    </div>
  )
}

export default Cart