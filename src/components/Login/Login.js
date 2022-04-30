import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { login } from '../../store/actions/user';
import styles from './Login.module.scss';
const Login = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['course-user']);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    dispatch(login({
      email,
      password
    }))
  }
  useEffect(() => {
    if (user.isLogin) {
      setCookie('course-user', {email: user.email, name: user.name}, { path: '/', maxAge: 3 * 24 * 3600 });
      return navigate('/');
    }
  }, [user])
  return (
    <div className={styles['container']}>
      <p className={styles['title']}>Login to your ConceptCourse account!</p>
      <span className={styles['input-field']}>
        <FontAwesomeIcon icon={faEnvelope} />
        <input 
          type="email" 
          placeholder='Email' 
          value={email} 
          onChange={(e) => handleEmail(e)} 
        />
      </span>
      <span className={styles['input-field']}>
        <FontAwesomeIcon icon={faLock} />
        <input
          type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => handlePassword(e)} 
        />
      </span>
      <button
        className={`${styles['input-field']} ${styles['login']}`}
        onClick={(e) => handleSubmit(e)}
      >
        Log in
      </button>
    </div>
  )
}

export default Login