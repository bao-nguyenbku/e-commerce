import './App.scss';
import Courses from './components/Courses/Courses';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
const App = () => {
  return (
    <div className='wrapper'>
      <NavBar />
      <div className='body-container'>
        <Banner />
        <Courses />
      </div>
    </div>
  );
}

export default App;
