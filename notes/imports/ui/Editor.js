// Create a named export editor that is a ES6 class component
// Render below notelist in dashboard

import React from 'react'
import { Session } from 'meteor/session'
import { createContainer } from 'meteor/react-meteor-data'
import { Notes } from '../api/notes'
import { browserHistory } from 'react-router'
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
  
  handleRemoval(){
    this.props.call('notes.remove',this.props.note._id)
    this.props.browserHistory.push('/dashboard')
  }
  
  componentDidUpdate(prevProps, prevState){
    const currentNoteId = this.props.note ? this.props.note._id : undefined
    const prevNoteId = prevProps.note ? prevProps.note._id : undefined
    
    if(currentNoteId && currentNoteId !== prevNoteId){
      this.setState({
        title: this.props.note.title,
        body: this.props.note.body
      })
    }
  }
  
  render(){
    if(this.props.note){
      return(
        <div className="editor">
          <input 
            value={this.state.title}
            placeholder='Note Title'
            onChange={this.handleTitleChange.bind(this)}
            className="editor__title"
          />
          <textarea 
            value={this.state.body}
            placeholder='Your Note Here'
            onChange={this.handleBodyChange.bind(this)}
            className="editor__body"
          >
          </textarea>
          <div>
            <button
            className='button button--secondary'
            onClick={this.handleRemoval.bind(this)}
            >
            Delete Note
            </button>
          </div>
        </div>
      )
    } else {
       return (
        <div className="editor">
           {this.props.selectedNoteId ? <p className="editor__message">Note Not Found</p> : <p className="editor__message">Pick Or Create Note To Get Started</p>}
        </div>
        )
    }
    
  }
}

Editor.propTypes = {
  note: React.PropTypes.object,
  selectedNoteId: React.PropTypes.string,
  call: React.PropTypes.func.isRequired,
  browserHistory: React.PropTypes.object.isRequired
}

export default createContainer(() => {
  const selectedNoteId = Session.get('selectedNoteId')
  
  return {
    selectedNoteId,
    note: Notes.findOne(selectedNoteId),
    call: Meteor.call,
    browserHistory
  }
}, Editor)