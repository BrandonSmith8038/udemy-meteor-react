import React from 'react'
import ReactDOM from 'react-dom'

const PrivateHeader = (props) => {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__title">{props.title}</h1>  
        <button className="button button--link-text" onClick={() => Accounts.logout()}>
          Logout
        </button>
      </div>
    </div>
  )
}

PrivateHeader.propType = {
  title: React.PropTypes.string.isRequired
}

export default PrivateHeader