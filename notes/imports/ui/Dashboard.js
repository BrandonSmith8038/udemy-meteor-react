import React from 'react'
import ReactDOM from 'react-dom'
import { Accounts } from 'meteor/accounts-base'

import Editor  from './Editor'
import NoteList from './NoteList'
import PrivateHeader from './PrivateHeader'

export default () => {
  return (
    <div>
      <PrivateHeader title='Dashboard'/>
      <div className="page-content">
        <div className="page-content__sidebar">
          <NoteList />
        </div>
        <div className="page-content__main">
          <Editor />
        </div>
      </div>
    </div>
  )
}