import React from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { Notes } from '../api/notes'
import { Session } from 'meteor/session'

import NoteListEmptyItem from './NoteListEmptyItem'
import  NoteListHeader  from './NoteListHeader'
import NoteListItem from './NoteListItem'

export const NoteList = (props) => {
  function renderNotesList(){
    if(props.notes.length > 0){
      return props.notes.map(note => {
        return <NoteListItem key={note._id} note={note}/>
      })
    } else {
      return <NoteListEmptyItem/>
    }
  }
  
  return (
    <div>
      <NoteListHeader />
      {renderNotesList()}
      NoteList { props.notes.length }
    </div>
  )
}

NoteList.propTypes = {
  notes:React.PropTypes.array.isRequired
}

export default createContainer(() => {
  const selectedNoteId = Session.get('selectedNoteId')
  Meteor.subscribe('notes')
  
  return {
    // Take notes add selected property to object
    // Set to true if match, false if not
    notes: Notes.find({},
    {
      sort: 
      {
        updatedAt: -1
      }
    }).fetch().map((note) => {
      return {
        ...note,
        selected: note._id === selectedNoteId 
      }
    })
  }
}, NoteList)