import React from 'react'
import ReactDOM from 'react-dom'
import { createContainer } from 'meteor/react-meteor-data'

export const PrivateHeader = (props) => {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__title">{props.title}</h1>  
        <button className="button button--link-text" onClick={() => props.handleLogout()}>
          Logout
        </button>
      </div>
    </div>
  )
}

PrivateHeader.propType = {
  title: React.PropTypes.string.isRequired,
  handleLogout: React.PropTypes.func.isRequired
}

export default createContainer(() => {
  return {
    handleLogout: () => Accounts.logout()
  }
}, PrivateHeader)