import React from "react";
import Articles from "./Articles";
import { getUsers } from "../api";
import {navigate} from '@reach/router'

class Login extends React.Component {
  state = {
    usernameInput: ""
  };

  render() {
    return (
      <div>
        <div className="login-div">
          <h4>Enter Username</h4>
            
          <form onSubmit={this.handleSumbit}>
            <input type="text" onChange={this.handleInput} />
            <button disabled={!this.state.usernameInput}>login</button>
            <p>e.g username - jessjelly</p>
          </form>
        </div>
        <Articles />
      </div>
    );
  }

  handleInput = e => {
    this.setState({ usernameInput: e.target.value });
  };

  handleSumbit = e => {
    e.preventDefault();
    getUsers(this.state.usernameInput).then(user => {
      return this.props.logInUser(user.username);
    }).catch(error => navigate("/error", {state : {displayerror: `- user not found`}}))
  };
}

export default Login;
