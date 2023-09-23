import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/1.login/Login';
import Profile from './pages/2.profile/Profile';
import Detail from './pages/3.detail/Detail';
import ForgotPassword from './pages/4. forgotPassword/ForgotPassword';
import ContactUs from './pages/5. contactUs/ContactUs';
import AboutUs from './pages/6. aboutUs/AboutUs';
import Adviser from './pages/7. adviser/Adviser';
import Navbar from './components/header/Navbar';



function App() {
  return (
      <div>
        <Navbar />
        <Router>
          <Routes>

            <Route exact path='/' element={<Login />} />
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path='/detail' element={<Detail />} />
            <Route exact path='/forgotPassword' element={<ForgotPassword />} />
            <Route exact path='/contactUs' element={<ContactUs />} />
            <Route exact path='/aboutUs' element={<AboutUs />} />
            <Route exact path='/adviser' element={<Adviser />} />

          </Routes>
        </Router>
      </div>
  );
}

export default App;
