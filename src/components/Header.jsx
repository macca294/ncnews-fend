import React from "react";
import { Link } from "@reach/router";
import "../App.css";
import logo from "../LOGO2.png";

const Header = props => {
  return (
    <header>
      <div className="nav-container">
        <img src={logo} id="logo" alt="" />
        <nav>
          <ul className="menu">
            <Link to="/articles">
              <li> Articles </li>
            </Link>
            <Link to="/topics">
              <li> Topics </li>
            </Link>
            {!props.loggedInUser ? (
              <Link to="/login">
                <li> Login </li>
              </Link>
            ) : (
              <div className='loggedIn'>
                <li>
                  hi {props.loggedInUser}!
                  <button className="logout-button" onClick={props.logOutUser}>
                    Logout
                  </button>
                </li>
                <Link to="/user">
                  <li>view profile</li>
                </Link>
              </div>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
