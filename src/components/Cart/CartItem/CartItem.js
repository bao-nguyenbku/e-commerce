import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../../store/actions/cart';

import styles from './CartItem.module.scss';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles['container']}>
      <img src={require(`../../../images/${item.image}`)} alt='thumbnail' />
      <div className={styles['description']}>
        <p>{item.name}</p>
        <p>By ConceptCourse</p>
      </div>
      <div className={styles['price-action']}>
        <p>{item.price}đ</p>
        <button
          className={styles['remove']}
          onClick={(e) => dispatch(removeItem(item))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
