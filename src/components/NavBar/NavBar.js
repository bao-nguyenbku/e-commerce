import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from "react-cookie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './NavBar.module.scss';
import commonStyles from '../../styles/Common.module.scss';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../../store/actions/user';
import { getPurchasedCourses } from '../../store/actions/course';
const NavBar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['course-user']);
  const totalQuantity = useSelector((state) => state.cart.quantity);
  const purchased = useSelector(state => state.course.purchased);
  const isLogin = useSelector(state => state.user.isLogin);
  const [activeClass, setActiveClass] = useState('');
  const dispatch = useDispatch();
  const handleLoggout = () => {
    removeCookie('course-user', { path: '/', maxAge: 0 });
    dispatch(logout());
  }
  useEffect(() => {
    dispatch(getPurchasedCourses());
  }, [])
  
  return (
    <nav className={styles['container']}>
      <div className={styles['logo']}>
        <Link to='/'>
          <p>ConceptCourse</p>
        </Link>
      </div>
      <div className={styles['user']}>
        {isLogin && 
        <ul>
          <a>My courses</a>
          <div className={`${styles['dropdown-menu']} ${activeClass ? styles['drop-active'] : ''}`}>
            <ul>
              {purchased.map(item => {
                return <li key={item.courseId}>
                  <Link to='/learning'>
                    <img src={require(`../../images/${item.image}`)} alt="" /> {item.name}
                  </Link>
                  </li>
              })}
            </ul>
          </div>
        </ul>
        }
        <span className={styles['cart-quantity']}>
          <Link to='/cart'>
            <FontAwesomeIcon
              icon={faShoppingCart}
              className={styles['cart-icon']}
            />
            {totalQuantity ? <span>{totalQuantity}</span> : ''}
          </Link>
        </span>
        {cookies['course-user']
        ? 
        <>
          <h1>{cookies['course-user'].name}</h1>
          <button 
            className={`${commonStyles['button']} ${styles['register']}`}
            onClick={() => handleLoggout()}  
          >
            Log out
          </button>
        </>
        :
        <>
          <Link to='/login'>
            <button className={`${commonStyles['button']} ${styles['login']}`}>
              Log in
            </button>
          </Link>
          <button className={`${commonStyles['button']} ${styles['register']}`}>
            Register
          </button>
        </>
        }
      </div>
    </nav>
  );
};

export default NavBar;
