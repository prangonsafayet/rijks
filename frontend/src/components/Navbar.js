import React from 'react';
import {Link} from 'react-router-dom';
import { setLang } from '../lib/languageSwitcher';
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
                  <button onClick={()=>{
                    setLang("nl");
                    window.location.reload();
                  }} className="lang-selector">
                    <img src='./nl.png' alt="Dutch"/>
                      NL
                  </button>
                  <button onClick={()=>{
                    setLang("en");
                    window.location.reload();
                  }} className="lang-selector">
                    <img src='./en.webp' alt="English"/>
                      EN
                  </button>
                </div>
                
               

            </div>
        </nav>
    </>
  )
}





export default Navbar