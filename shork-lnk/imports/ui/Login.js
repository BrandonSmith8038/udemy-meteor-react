import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'


export default class Login extends React.Component{
  
  render(){
    return(
      <div>
        <h1>Login To Short Link</h1>
        <p>Login Form Here</p>
        <Link to="/signup">
          <p>Need An Account?</p>
        </Link>
      </div>
    )
  }
}