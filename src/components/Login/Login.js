import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import styles from './Login.module.scss';
const Login = () => {
  return (
    <div className={styles['container']}>
        <p className={styles['title']}>Login to your ConceptCourse account!</p>
        <span className={styles['input-field']}>
            <FontAwesomeIcon icon={faEnvelope}/>
            <input type="email" placeholder='Email'/>
        </span>
        <span className={styles['input-field']}>
            <FontAwesomeIcon icon={faLock}/>
            <input type="password" placeholder='Password'/>
        </span>
        <button className={`${styles['input-field']} ${styles['login']}`}>
            Log in
        </button>
    </div>
  )
}

export default Login