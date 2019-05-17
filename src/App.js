import React from 'react';
import './App.css';
import Header from './components/Header'
import { Router, navigate } from "@reach/router"
import Articles from './components/Articles'
import Article from './components/Article'
import Topics from './components/Topics'
import Login from './components/Login'
import PostComment from './components/PostComment';



class App extends React.Component {
  state = {
    loggedInUser: ''
  };

  render(){
    console.log(this.state.loggedInUser)
    return (
      <div className="App">
      <Header loggedInUser={this.state.loggedInUser} logOutUser={this.logOutUser}/>
      <Router>
      <Articles path='/articles'/>
      <Articles path='/articles/topic/:topic'/>
      <Article path='/articles/:article_id' loggedInUser={this.state.loggedInUser}/>
      <Topics path='/topics'/>
      <Login path='/login' logInUser={this.loginUser} /> 
       </Router> 
      </div>
    );
  

  }
 
  loginUser = username => {
    this.setState({loggedInUser : username}, ()=>{navigate('/articles')})


  }

  logOutUser = () => {
    this.setState({loggedInUser : ''}, ()=>navigate('/login'))
  }
}

export default App;
