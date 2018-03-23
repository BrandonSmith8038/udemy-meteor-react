import React from 'react'
import ReactDOM from 'react-dom'
import { Accounts } from 'meteor/accounts-base'
import { Link } from 'react-router'
import { createContainer } from 'meteor/react-meteor-data'

export class Signup extends React.Component{
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
    
    this.props.createUser({
      email,
      password
    }, err => {
      err ? this.setState({error: err.reason}) : this.setState({error: ''})
    })
  }
  
  
  render(){
    return(
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Join</h1>
          
          {this.state.error ? <p className='error-msg'>{this.state.error}</p> : undefined}
          
          <form className="boxed-view__form">
            <input type="email" ref="email" name="email" placeholder="Email" noValidate/>
            <input type="password" ref="password" name="password" placeholder="Password" noValidate/>
            <button 
              className="button" 
              onClick={this.onSubmit.bind(this)}>
                Create Account          
            </button>
          </form>
          <Link to="/">
            Already Have An Account?
          </Link>
        </div>
      </div>
    )
  }
}

Signup.propTypes = {
  createUser: React.PropTypes.func.isRequired
}

export default createContainer(() => {
  return {
    createUser: Accounts.createUser
  }
}, Signup)