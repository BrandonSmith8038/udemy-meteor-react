// Create a named export editor that is a ES6 class component
// Render below notelist in dashboard

import React from 'react'
import { Session } from 'meteor/session'
import { createContainer } from 'meteor/react-meteor-data'
import { Notes } from '../api/notes'
import { Meteor } from 'meteor/meteor'


export class Editor extends React.Component {
  
  constructor(props){
    super(props)
    
    this.state = {
      title: '',
      body: ''
    }
  }
  
  handleBodyChange(e){
    const body = e.target.value
      
    this.setState({ body })
    this.props.call('notes.update', this.props.note._id, { body })
  }
  
  handleTitleChange(e){
    const title = e.target.value
    
    this.setState({ title })
    this.props.call('notes.update', this.props.note._id, { title })
  }
  
  componentDidUpdate(prevProps, prevState){
    const currentNoteId = this.props.note ? this.props.note._id : undefined
    const prevNoteId = prevProps.note ? prevProps.note._id : undefined
    
    if(currentNoteId && currentNoteId !== prevNoteId){
      this.setState(
        {
          title: this.props.note.title,
          body: this.props.note.body
        }
        )
    }
  }
  
  render(){
    if(this.props.note){
      return(
        <div>
          <input 
            value={this.state.title}
            placeholder='Note Title'
            onChange={this.handleTitleChange.bind(this)}
          />
          <textarea 
            value={this.state.body}
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