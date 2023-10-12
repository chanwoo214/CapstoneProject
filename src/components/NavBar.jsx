import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import '../style/navbar.css'


const NavBar = () => {
  const isMobile = window.navigator.userAgent.indexOf("Mobile") !== -1;
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  //const { authStatus, signOut1 } = useAuthenticator((context) => [context.authStatus]);
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  }
  const logOut = () => {
    signOut();
   
  }


  return (
    <div>
      <div>
        <div className="login-icon">
          {user ? (
            <div onClick={logOut} className="nav-icon">
              <FontAwesomeIcon icon={faUser} />
              {!isMobile && 
                (<span style={{ cursor: "pointer" }}>Logout</span>)
              }
            </div>
          ) : (
            <div onClick={() => navigate("/login")} className="nav-icon">
              <FontAwesomeIcon icon={faUser} />
              {!isMobile && (<span style={{ cursor: "pointer" }}>Login/Sign Up</span>)}
            </div>
          )}
        </div>
        <div className="logo">          
          <img width={150} className="logo-button" src="data:image/png;base64,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" onClick={goToHome} />
        </div>
      </div>
      <div className="menu-area">
        <menu className="menu-list">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item"> 
            <a class="nav-link active" aria-current="page" href="/user">Client List</a>
            </li>
            <li class="nav-item"> 
            <a class="nav-link active" aria-current="page" href="/todo">To Do List</a>
            </li>
        </menu>
      </div>
    </div>
  )
}

export default NavBar
