import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import Courses from './components/Courses/Courses';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Login from './components/Login/Login';
import CourseDetail from './components/CourseDetail/CourseDetail';
import Cart from './components/Cart/Cart';

import './App.scss';
import store from './store/index';
import { getCourses } from './store/actions/course';

import Checkout from './components/Cart/Checkout/Checkout';
const App = () => {
  useEffect(() => {
    store.dispatch(getCourses());
  }, []);

  return (
    <Provider store={store}>
      <div className='wrapper'>
        <NavBar />
        <div className='body-container'>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/course/:id' element={<CourseDetail />} />
            <Route
              path='/'
              element={
                <>
                  <Banner />
                  <Courses />
                </>
              }
            />
            <Route path='/cart' element={<Cart />} />
            <Route path='/cart/checkout' element={<Checkout />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
};

export default App;
