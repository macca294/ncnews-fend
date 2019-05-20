import React, { Component } from "react";
import { navigate } from "@reach/router";
import { getUsers } from "../api";

export default class User extends Component {
  state = {
    user: []
  };

  render(props) {
    const { user } = this.state;
    return (
      <div className="profile">
        <h1>{user.username}'s profile!</h1>
        <img src={user.avatar_url} alt="no profile pic" />
        <p>Name : {user.name}</p>
      </div>
    );
  }

  componentDidMount() {
    getUsers(this.props.loggedInUser)
      .then(user => {
        this.setState({ user: user });
      })
      .catch(error =>
        navigate("/error", { state: { displayerror: "- user not found" } })
      );
  }
}
