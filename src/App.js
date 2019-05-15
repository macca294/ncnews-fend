import React from 'react';
import './App.css';
import Header from './components/Header'
import { Router } from "@reach/router"
import Articles from './components/Articles'
import Article from './components/Article'
import Topics from './components/Topics'
import Login from './components/Login'



class App extends React.Component {
  state = {
    loggedInUser: ''
  };

  render(){
    return (
      <div className="App">
      <Header />
      <Router>
      <Articles path='/articles'/>
      <Articles path='/articles/topic/:topic'/>
      <Article path='/articles/:article_id'/>
      <Topics path='/topics'/>
      <Login path='/login'/> 
       </Router> 
      </div>
    );
  

  }
 
  loginUser = username => {
    this.setState({})

  }

}

export default App;
