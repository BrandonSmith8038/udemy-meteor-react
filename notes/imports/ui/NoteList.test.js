import React from 'react'
import expect from 'expect'
import { mount } from 'enzyme'
import { Meteor } from 'meteor/meteor'

import { NoteList } from './NoteList'

const notes = [
    {
      _id: 'noteid1',
      title: 'Test Title',
      body: 'This is the body',
      updatedAt: 0,
      userId: 'userId1'
    },
    {
      _id: 'noteid2',
      body: 'This is the body',
      updatedAt: 0,
      userId: 'userId2'
    }
  ]

if(Meteor.isClient){
  describe('NoteList', function(){
    
    it('Should render noteListItem for each note', function() {
      const wrapper = mount(<NoteList notes={notes} />)
      
      expect(wrapper.find('NoteListItem').length).toBe(2)
      expect(wrapper.find('NoteListEmptyItem').length).toBe(0)
    })
    
    it('Should render noteListEmptyItem if no notes', function(){
      const wrapper = mount(<NoteList notes={{}} />)
      
      expect(wrapper.find('NoteListItem').length).toBe(0)
      expect(wrapper.find('NoteListEmptyItem').length).toBe(1)
    })
    
  })
}