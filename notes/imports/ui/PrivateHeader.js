import React from 'react'
import ReactDOM from 'react-dom'
import { createContainer } from 'meteor/react-meteor-data'
import { Session } from 'meteor/session'

export const PrivateHeader = (props) => {
  const navImageSrc = props.isNavOpen ? '/images/x.svg' : '/images/bars.svg'
  
  return (
    <div className="header">
      <div className="header__content">
        <img 
          className="header__nav-toggle" 
          src={navImageSrc} 
          onClick={props.handleMenuClick} 
        />
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
  handleLogout: React.PropTypes.func.isRequired,
  handleMenuClick: React.PropTypes.func.isRequired,
  isNavOpen: React.PropTypes.bool.isRequired
}

export default createContainer(() => {
  return {
    handleMenuClick: () => {
      const menuState = Session.get('isNavOpen')
      Session.set('isNavOpen', !menuState)
    },
    handleLogout: () => Accounts.logout(),
    isNavOpen: Session.get('isNavOpen')
  }
}, PrivateHeader)