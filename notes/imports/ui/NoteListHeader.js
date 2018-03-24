import { Meteor } from 'meteor/meteor'
import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'

export const NoteListHeader = (props) => {
  
  return (
    <div>
      <button
        className='button'
        onClick = {() => props.meteorCall('notes.insert')}
      >
        Create Note
      </button>
    </div>
  )
}

NoteListHeader.propType = {
  meteorCall: React.PropTypes.func.isRequired
}

export default createContainer(() => {
  return {
    meteorCall: Meteor.call
  }
}, NoteListHeader)