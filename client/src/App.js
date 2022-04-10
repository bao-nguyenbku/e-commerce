import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.scss';
import Courses from './components/Courses/Courses';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Login from './components/Login/Login';
import CourseDetail from './components/CourseDetail/CourseDetail';
import Cart from './components/Cart/Cart';
const App = () => {
  return (
    <div className='wrapper'>
      <NavBar />
      <div className='body-container'>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/course/:id' element={<CourseDetail />}/>
        <Route path='/' element={
          <>
            <Banner />
            <Courses />
          </>
        }/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
