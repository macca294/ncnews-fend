import React from "react";
import { Link } from "@reach/router";
import "../App.css";
import logo from "../LOGO.png";

const Header = props => {
  return (
    <header>
      <div className="nav-container">
        <img src={logo} id="logo" alt="" />
        <nav>
          <ul className="menu">
            <Link to="/articles">
              <li> Home </li>
            </Link>
            <Link to="/topics">
              <li> Topics </li>
            </Link>
            {!props.loggedInUser ? (
              <Link to="/login">
                <li> Login </li>
              </Link>
            ) : (
                <div> <li>
                {props.loggedInUser}
                </li>
                <button className = 'logout-button' onClick= {props.logOutUser}>Logout</button></div>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
