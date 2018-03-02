import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'


export default class Link extends React.Component {
  
  onLogout(){
    return browserHistory.push('/')
  }
  
  render(){
    return(
      <div>
        <h1>Your Links</h1>  
        <button onClick={this.onLogout.bind(this)}>
          Logout
        </button>
      </div>
    )
  }
}