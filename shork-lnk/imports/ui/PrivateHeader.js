import React from 'react'
import ReactDOM from 'react-dom'

export default class PrivateHeader extends React.Component {
  
  onLogout(){
    Accounts.logout()
  }
  
  
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>  
        <button onClick={this.onLogout.bind(this)}>
          Logout
        </button>
      </div>
    )
  }
}

PrivateHeader.propType = {
  title: React.PropTypes.string.isRequired
}