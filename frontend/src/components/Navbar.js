import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
              <div>
              <Link to="/" className="navbar-logo">
                    <img src='./logo.png' alt="Rijks Museum"/>
                </Link>
              </div>
                
                <div className='lang-selector-container'>
                  <Link to="/" className="lang-selector">
                    <img src='./nl.png' alt="Dutch"/>
                      NL
                  </Link>
                  <Link to="/en" className="lang-selector">
                  <img src='./en.webp' alt="English"/>
                      EN
                  </Link>
                </div>
                
               

            </div>
        </nav>
    </>
  )
}





export default Navbar