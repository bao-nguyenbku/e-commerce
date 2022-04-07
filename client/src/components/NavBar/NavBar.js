import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './NavBar.module.scss';
import commonStyles from '../../styles/Common.module.scss';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    
    return (
        <nav className={styles['container']}>
            <div className={styles['logo']}>
                <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="" />
            </div>
            <ul>
                <li>Khoá học</li>
            </ul>
            <div className={styles['user']}>
                <span>
                    <FontAwesomeIcon icon={faShoppingCart} className={styles['cart']}/>
                </span>
                <button className={`${commonStyles['button']} ${styles['login']}`}>Log in</button>
                <button className={`${commonStyles['button']} ${styles['register']}`}>Register</button>
            </div>
        </nav>
        
    );
}

export default NavBar;