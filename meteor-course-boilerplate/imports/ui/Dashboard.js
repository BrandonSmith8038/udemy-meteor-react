import React from 'react'
import ReactDOM from 'react-dom'
import { Accounts } from 'meteor/accounts-base'

import PrivateHeader from './PrivateHeader'

export default () => {
  return (
    <div>
      <PrivateHeader title='Dashboard'/>
      <div className="page-content">
        Dashboard Page Content
      </div>
    </div>
  )
}