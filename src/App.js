import React from 'react';
import './App.css';
import Header from './components/Header'
import { Router } from "@reach/router"
import Articles from './components/Articles'
import Article from './components/Article'
import Topics from './components/Topics'



class App extends React.Component {
  state = {
    loggedInUser: ''
  };

  render(){
    return (
      <div className="App">
      <Header />
      <Router>
      <Articles path='/'/>
      <Article path='/articles/:article_id'/>
      <Topics path='/topics'/>
       </Router> 
      </div>
    );
  

  }
 
  loginUser = username => {
    this.setState({})

  }

}

export default App;
