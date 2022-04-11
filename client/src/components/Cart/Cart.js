import React from 'react';
import { useSelector } from 'react-redux';

import PaymentInfo from './PaymentInfo/PaymentInfo';
import CartItem from './CartItem/CartItem';

import styles from './Cart.module.scss';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <div className={styles['container']}>
      <p className={styles['title']}>Your Shopping Cart</p>
      <div className={styles['content']}>
        <div className={styles['item-list']}>
          {/* <CartItem />
              <CartItem />
              <CartItem /> */}
          {items.map((item) => (
            <CartItem item={item} />
          ))}
        </div>
        <div className={styles['payment-info']}>
          <PaymentInfo />
        </div>
      </div>
    </div>
  );
};

export default Cart;
