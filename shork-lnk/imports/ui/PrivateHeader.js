import React from 'react'
import ReactDOM from 'react-dom'

const PrivateHeader = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>  
      <button onClick={() => Accounts.logout()}>
        Logout
      </button>
    </div>
  )
}

PrivateHeader.propType = {
  title: React.PropTypes.string.isRequired
}

export default PrivateHeader