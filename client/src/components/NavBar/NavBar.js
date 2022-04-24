import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './NavBar.module.scss';
import commonStyles from '../../styles/Common.module.scss';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const totalQuantity = useSelector((state) => state.cart.quantity);
  return (
    <nav className={styles['container']}>
      <div className={styles['logo']}>
        <Link to='/'>
          <img
            src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg'
            alt=''
          />
        </Link>
      </div>
      <ul>
        <li>Khoá học</li>
      </ul>
      <div className={styles['user']}>
        <span className={styles['cart-quantity']}>
          <Link to='/cart'>
            <FontAwesomeIcon
              icon={faShoppingCart}
              className={styles['cart-icon']}
            />
            {totalQuantity ? <span>{totalQuantity}</span> : ''}
          </Link>
        </span>
        <Link to='/login'>
          <button className={`${commonStyles['button']} ${styles['login']}`}>
            Log in
          </button>
        </Link>
        <button className={`${commonStyles['button']} ${styles['register']}`}>
          Register
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
