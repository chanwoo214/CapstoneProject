import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


const NavBar = () => {
  const isMobile = window.navigator.userAgent.indexOf("Mobile") !== -1;
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  }
  const logOut = () => {
    signOut();
    navigate("/login");
  }


  return (
    <div>
      <div>
        <div className="login-icon">
          {user ? (
            <div onClick={logOut} className="nav-icon">
              <FontAwesomeIcon icon={faUser} />
              {!isMobile && (
                <span style={{ cursor: "pointer" }}>Logout</span>
              )}
            </div>
          ) : (
            <div onClick={() => navigate("/login")} className="nav-icon">
              <FontAwesomeIcon icon={faUser} />
              {!isMobile && <span style={{ cursor: "pointer" }}>Login/Sign Up</span>}
            </div>
          )}
        </div>
        <div className="logo">          
          <img width={150} className="logo-button" src="https://logo.com/image-cdn/images/kts928pd/production/167fb8f48a301faab6df0e1b1cdf2fa2b1833355-410x412.png?w=1080&q=72" onClick={goToHome} />
        </div>
      </div>
      <div className="menu-area">
        <menu className="menu-list">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          {user ? (
          <li class="nav-item"> {!isMobile &&(
            <a class="nav-link active" aria-current="page" href="/user">Client List</a>
          )}
          </li>
          ) : (null)
          };
        </menu>
      </div>
    </div>
  )
}

export default NavBar
