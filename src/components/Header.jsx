import React from "react";
import { Link } from "@reach/router";
import '../App.css'
import logo from '../LOGO.png'



const Header = () => {
  return (
      <header>
    <div className='nav-container'>
      <img src={logo} id='logo' alt=''/>
      <nav>
          <ul className='menu'>
        <Link to="/">  
        <li> Home </li>
        </Link>
        <Link to="/topics">  
        <li> Topics </li>
        </Link>
        <Link to="/login">  
        <li> Login </li>
        </Link>
        </ul>
      </nav>
    </div>
    </header>
  );
};

export default Header;