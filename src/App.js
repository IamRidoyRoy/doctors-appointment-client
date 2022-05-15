import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Pages/About/About';
import Appointment from './components/Pages/Appointment/Appointment';
import ContactUs from './components/Pages/ContactUs/ContactUs';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Reviews from './components/Pages/Reviews/Reviews';
import Navbar from './components/Pages/Shared/Navbar';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>} ></Route>
        <Route path='/reviews' element={<Reviews></Reviews>} ></Route>
        <Route path='/contactus' element={<ContactUs></ContactUs>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
