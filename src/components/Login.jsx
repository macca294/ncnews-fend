import React from 'react';
import Articles from './Articles'
import { getUsers } from '../api'

class Login extends React.Component {


state = {

   usernameInput: '' 
}

render(){

return (
<div>
<div className='login-div'>
<h1>Enter Username</h1>
<form onSubmit={this.handleSumbit}>
<input type="text" onChange={this.handleInput}/>
<button>login</button>
</form>
<br/>
</div>
<Articles/>
</div>
)
}

handleInput = (e) => {

this.setState({usernameInput: e.target.value})

}

handleSumbit = (e) => {
    e.preventDefault()
    getUsers(this.state.usernameInput).then(user => {
        return this.props.logInUser(user.username)
    })
}

}


export default Login