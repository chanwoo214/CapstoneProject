import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'


const Navbar = () => {
  const menuList = ["Home", "Mortgage", "About Us", "Contact Us"]
  return (
    <div>
      <div>
        <div className="login-button" >
          <FontAwesomeIcon icon={faUser} />
          <div>Login</div>
        </div>
      </div>
      <div className="nav-section">
        < img width={100} src="https://logo.com/image-cdn/images/kts928pd/production/167fb8f48a301faab6df0e1b1cdf2fa2b1833355-410x412.png?w=1080&q=72" />
      </div>
      <div className="menu-area">
          <ul className = "menu-list">
            {menuList.map((menu) => (
              <li>{menu}</li>
            ))}
          </ul>
        </div>
        <div>

        </div>
      </div>
  


  )
}

export default Navbar