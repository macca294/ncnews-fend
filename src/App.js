import React from 'react';
import './App.css';
import Header from './components/Header'
import { Router, navigate } from "@reach/router"
import Articles from './components/Articles'
import Article from './components/Article'
import Topics from './components/Topics'
import Login from './components/Login'
import Error from './components/Error'
import User from './components/User'


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
      <User path='/user' loggedInUser={this.state.loggedInUser}/>
      <Error path='/error'/>
       </Router> 
      </div>
    );
  

  }

  componentDidMount() {

    const recentUser = localStorage.getItem('loggedInUser');
    if (recentUser) this.setState({ loggedInUser: recentUser });

  }
 
  loginUser = username => {
    this.setState({loggedInUser : username}, ()=>{navigate('/articles')})
    localStorage.setItem('loggedInUser', this.state.loggedInUser) 
    

  }

  logOutUser = () => {
    this.setState({loggedInUser : ''}, ()=>navigate('/login'))
  }
}

export default App;
