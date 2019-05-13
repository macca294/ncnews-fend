import React from 'react';
import './App.css';
import Header from './components/Header'
import { Router, Link } from "@reach/router"


class App extends React.Component {
  state = {
    loggedInUser: ''
  };

  render(){
    return (
      <div className="App">
      <Header />
      
      </div>
    );
  

  }
 
  loginUser = username => {
    this.setState({})

  }

}

export default App;
