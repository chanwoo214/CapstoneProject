import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/1.login/Login';
import ProductAll from './pages/2.profile/Profile';
import Detail from './pages/3.detail/Detail';
import Navbar from './components/header/Navbar'; 

//1. Product page, Login page, Product Details Page
//1.1 Create navbar
//2. In the product page, user can view all the products
//3. When LOGIN Button is clicked, login page appears.
//4. When Product detail page is clicked, if not logged in, login page appears
//5. When logged in, user can view the detailed page
//6. When log out button is clicked, user logs out and back to the login page and cannot view the detailed page
//7. When user is logged in, login icon changes.

function App() {
  return (
    <div>
      <Navbar/>
    <Router>
      <Routes>
      
          <Route exact path='/' element={<Login />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/product/:id' element={<Detail />} />
      
      </Routes>
      </Router>
      </div>

  )
}

export default App
