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
    
    if(password.length < 6){
      return this.setState({error: 'Password Must Be More Then Six Characters Long' })
    }
    
    Accounts.createUser({
      email,
      password
    }, err => {
      err ? this.setState({error: err.reason}) : this.setState({error: ''})
    })
  }
  
  
  render(){
    return(
      <div>
        <h1>Join Short Lnk</h1>
        
        <p>{this.state.count}</p>
        
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        
        <form>
          <input type="email" ref="email" name="email" placeholder="Email" noValidate/>
          <input type="password" ref="password" name="password" placeholder="Password" noValidate/>
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