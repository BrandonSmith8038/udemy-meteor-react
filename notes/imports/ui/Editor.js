// Create a named export editor that is a ES6 class component
// Render below notelist in dashboard

import React from 'react'
import { Session } from 'meteor/session'
import { createContainer } from 'meteor/react-meteor-data'
import { Notes } from '../api/notes'
import { Meteor } from 'meteor/meteor'


export class Editor extends React.Component {
  
  handleBodyChange(e){
    this.props.call('notes.update', this.props.note._id, {
      body: e.target.value
    })
  }
  
  handleTitleChange(e){
    this.props.call('notes.update', this.props.note._id, {
      title: e.target.value
    })
  }
  
  render(){
    if(this.props.note){
      return(
        <div>
          <input 
            value={this.props.note.title}
            placeholder='Note Title'
            onChange={this.handleTitleChange.bind(this)}
          />
          <textarea 
            value={this.props.note.body}
            placeholder='Your Note Here'
            onChange={this.handleBodyChange.bind(this)}
          >
          </textarea>
          <button className='button'>Delete Note</button>
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
    note: Notes.findOne(selectedNoteId),
    call: Meteor.call
  }
}, Editor)