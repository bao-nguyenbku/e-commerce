import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { CookiesProvider, useCookies } from 'react-cookie';
import Courses from './components/Courses/Courses';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Login from './components/Login/Login';
import CourseDetail from './components/CourseDetail/CourseDetail';
import Cart from './components/Cart/Cart';
import CourseLearning from './components/CourseLearning/CourseLearning';

import './App.scss';
import store from './store/index';
import { getCourses } from './store/actions/course';
import Checkout from './components/Cart/Checkout/Checkout';

const App = () => {
  useEffect(() => {
    store.dispatch(getCourses());
  }, []);

  const [cookies, setCookie] = useCookies(['course-user']);
  return (
    <PayPalScriptProvider
      options={{
        'client-id': 'test',
        components: 'buttons',
        currency: 'USD',
      }}
    >
      <Provider store={store}>
        <CookiesProvider>
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
                <Route path='/cart' element={<Cart />}/>
                <Route path='/cart/checkout' element={cookies['course-user'] ? <Checkout /> : <Navigate to="/login" replace />}/>

                <Route path='/learning' element={cookies['course-user'] ? <CourseLearning /> : <Navigate to="/login" replace />} />
              </Routes>
            </div>
          </div>
        </CookiesProvider>
      </Provider>
    </PayPalScriptProvider>
  );
};

export default App;
