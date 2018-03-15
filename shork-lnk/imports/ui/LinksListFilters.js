import React from 'react'
import { Session } from 'meteor/session'


export default () => {
  return (
    <div>
      <label>
        <input type='checkbox' onChange={(e) => {
            Session.set('showVisibile', !e.target.checked) 
        }}/>
        Show Hidden Links
      </label>
    </div>
  )
}