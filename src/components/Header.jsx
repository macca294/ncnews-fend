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
              <li>
                user: {props.loggedInUser}
                <button className="logout-button" onClick={props.logOutUser}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
