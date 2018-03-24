// Create a named export editor that is a ES6 class component
// Render below notelist in dashboard

import React from 'react'
import { Session } from 'meteor/session'
import { createContainer } from 'meteor/react-meteor-data'
import { Notes } from '../api/notes'


export class Editor extends React.Component {
  
  render(){
    if(this.props.note){
      return(
        <div>
          <p>We Got The Note</p>
        </div>
      )
    } else {
       return this.props.selectedNoteId ? <p>Note Not Found</p> : <p>Pick Or Create A Note To Get Started</p>
    }
    
  }
}

Editor.propTypes = {
  note: React.PropTypes.object,
  selectedNoteId: React.PropTypes.string
}

export default createContainer(() => {
  const selectedNoteId = Session.get('selectedNoteId')
  
  return {
    selectedNoteId,
    note: Notes.findOne(selectedNoteId)
  }
}, Editor)