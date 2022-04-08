import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.scss';
import Courses from './components/Courses/Courses';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Login from './components/Login/Login';
const App = () => {
  return (
    <div className='wrapper'>
      <NavBar />
      <div className='body-container'>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={
          <>
            <Banner />
            <Courses />
          </>
        }/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
