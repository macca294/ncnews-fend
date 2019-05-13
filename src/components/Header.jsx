import React from "react";
import { Link } from "@reach/router";
import '../App.css'

const Header = () => {
  return (
      <header>
    <div className='nav-container'>
      <h1 id='logo'>NC News</h1>
      <nav>
          <ul className='menu'>
        <Link to="/">  
        <li> Home </li>
        </Link>
        <Link to="/articles">  
        <li> Articles </li>
        </Link>
        <Link to="/articles">  
        <li> Login </li>
        </Link>
        </ul>
      </nav>
    </div>
    </header>
  );
};

export default Header;