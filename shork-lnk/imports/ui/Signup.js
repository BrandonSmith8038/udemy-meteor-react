import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

export default class Signup extends React.Component{
  
  render(){
    return(
      <div>
        <p>Signup Form Here</p>
       <Link to="/">
          Already Have An Account?
       </Link>
      </div>
    )
  }
}