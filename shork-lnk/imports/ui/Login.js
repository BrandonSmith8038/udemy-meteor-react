import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router'


export default class Login extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      error: ''
    }
  }
  
  onSubmit(e){
    e.preventDefault()
    
    const email = this.refs.email.value.trim()
    const password = this.refs.password.value.trim()
    
    Meteor.loginWithPassword({email},password, (err) => {
     err ? this.setState({error: 'Unable To Login Check Email and Password'}) : this.setState({error:''})
    })
  }
  
  render(){
    return(
      <div>
        <h1>Short Lnk</h1>
        
        <p>{this.state.count}</p>
        
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        
        <form>
          <input type="email" ref="email" name="email" placeholder="Email"/>
          <input type="password" ref="password" name="password" placeholder="Password"/>
          <button onClick={this.onSubmit.bind(this)}>
            Login          
          </button>
        </form>
        <Link to="/signup">
          <p>Need An Account?</p>
        </Link>
      </div>
    )
  }
}