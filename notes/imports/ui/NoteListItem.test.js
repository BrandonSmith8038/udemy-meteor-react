import React from 'react'
import expect from 'expect'
import { mount } from 'enzyme'
import { Meteor } from 'meteor/meteor'
import { NoteListItem } from './NoteListItem'
import moment from 'moment'
import { notes } from '../fixtures/fixtures'

if(Meteor.isClient){
  
  describe('NoteListItem', function(){
    
    let Session
    
    beforeEach(() => {
      Session = {
        set: expect.createSpy()
      }
    })
    
    it('Should render title and timestamp', function(){
      const wrapper = mount(<NoteListItem note={ notes[0] } Session={Session} />)
      
      expect(wrapper.find('h5').text()).toBe(notes[0].title)
      expect(wrapper.find('p').text()).toBe(moment().format('M/DD/YY'))
    })
    
    it('Should set default title if no title set', function(){
      const wrapper = mount(<NoteListItem note={ notes[1] }  Session={Session} />)
      
      expect(wrapper.find('h5').text()).toBe('Untitled Note')
    })
    
    it('Should call set on click', function(){
      // Render Note List Item using either note and Session
      const wrapper = mount(<NoteListItem note={ notes[0] } Session={Session} />)
      // Find div and simulate click event
      wrapper.find('div').simulate('click')
      // Expect Session.set to have been called with some arguments
      expect(Session.set).toHaveBeenCalled('selectedNoteId', notes[0]._id)
    })
    
  })
}