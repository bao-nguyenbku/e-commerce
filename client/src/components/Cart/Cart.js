import React from 'react';
import { useSelector } from 'react-redux';

import PaymentInfo from './PaymentInfo/PaymentInfo';
import CartItem from './CartItem/CartItem';

import styles from './Cart.module.scss';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const total = useSelector(state => state.cart.total);
  // const summaryCost = items.reduce((prev, curr) => {
  //   return prev + curr.price;
  // }, 0)

  return (
    <div className={styles['container']}>
      {items && items.length > 0
      ? 
      <>
        <p className={styles['title']}>Your Shopping Cart</p>
        <div className={styles['content']}>
          <div className={styles['item-list']}>
            {/* <CartItem />
                <CartItem />
                <CartItem /> */}
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className={styles['payment-info']}>
            {items.length > 0 && <PaymentInfo 
              summary={total}
            />}
          </div>
        </div>
      </>
      : <p className={styles['title']}>Your cart is empty</p>
    }
    </div>
  );
};

export default Cart;
