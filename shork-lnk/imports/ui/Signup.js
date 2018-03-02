import React from 'react'
import ReactDOM from 'react-dom'
import { Accounts } from 'meteor/accounts-base'
import { Link } from 'react-router'

export default class Signup extends React.Component{
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
    
    Accounts.createUser({
      email,
      password
    }, err => {
      console.log('Signup Callback', e)
    })
    
    this.setState({
      error: 'Something Went Wrong'
    })
  }
  
  
  render(){
    return(
      <div>
        <p>Signup Form Here</p>
        
        <p>{this.state.count}</p>
        
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        
        <form>
          <input type="email" ref="email" name="email" placeholder="Email"/>
          <input type="password" ref="password" name="password" placeholder="Password"/>
          <button onClick={this.onSubmit.bind(this)}>
            Create Account          
          </button>
        </form>
       <Link to="/">
          Already Have An Account?
       </Link>
      </div>
    )
  }
}