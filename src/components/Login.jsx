import React from 'react';
import Articles from './Articles'

class Login extends React.Component {


state = {}

render(){

return (
<div>
<div className='login-div'>
<h1>Enter Username</h1>
<form onSubmit={this.handleSumbit}>
<input type="text"/>
<button>login</button>
</form>
<br/>
</div>

<Articles/>
</div>
)
}

}


export default Login