import React from 'react'
import ReactDOM from 'react-dom'
import { Accounts } from 'meteor/accounts-base'

import NoteList from './NoteList'
import PrivateHeader from './PrivateHeader'

export default () => {
  return (
    <div>
      <PrivateHeader title='Dashboard'/>
      <div className="page-content">
        <NoteList/>
      </div>
    </div>
  )
}