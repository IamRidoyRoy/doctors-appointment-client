import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Pages/About/About';
import Appointment from './components/Pages/Appointment/Appointment';
import ContactUs from './components/Pages/ContactUs/ContactUs';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/LogIn_SignUp/Login';
import SignUp from './components/Pages/LogIn_SignUp/SignUp';
import Reviews from './components/Pages/Reviews/Reviews';
import Footer from './components/Pages/Shared/Footer';
import Navbar from './components/Pages/Shared/Navbar';
import RequireAuth from './components/Pages/Shared/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import MyAppointment from './components/Pages/Dashboard/MyAppointment';
import MyReview from './components/Pages/Dashboard/MyReview';
import MyHistory from './components/Pages/Dashboard/MyHistory';
import Users from './components/Pages/Dashboard/Users';
function App() {
  return (
    <div className='max-w-7xl	' >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        } ></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
        </Route>
        <Route path='/reviews' element={<Reviews></Reviews>} ></Route>
        <Route path='/contactus' element={<ContactUs></ContactUs>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/signup' element={<SignUp></SignUp>} ></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
