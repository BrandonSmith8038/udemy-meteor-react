import React from 'react'
import expect from 'expect'
import { mount } from 'enzyme'
import { Meteor } from 'meteor/meteor'
import { NoteListHeader } from './NoteListHeader'
import { notes } from '../fixtures/fixtures'

if(Meteor.isClient){
  
  let meteorCall
  let Session
  
  beforeEach(function () {
    meteorCall = expect.createSpy()
    Session = {
      set: expect.createSpy()
    }
  })
  
  describe('NoteListHeader', function(){
    it('Should call meteorCall on click', function(){
      
      const wrapper = mount(<NoteListHeader Session={Session} meteorCall={meteorCall}/>)
      
      wrapper.find('button').simulate('click')
      meteorCall.calls[0].arguments[1](undefined, notes[0]._id)
      
      expect(meteorCall.calls[0].arguments[0]).toBe('notes.insert')
      expect(Session.set).toHaveBeenCalledWith('selectedNoteId', notes[0]._id)
    })
    
    it('Should not set session for failed inser', function() {
      const wrapper = mount(<NoteListHeader Session={Session} meteorCall={meteorCall}/>)
      
      wrapper.find('button').simulate('click')
      meteorCall.calls[0].arguments[1]({})
      
      expect(meteorCall.calls[0].arguments[0]).toBe('notes.insert')
      expect(Session.set).toNotHaveBeenCalled()
    })
    
    
  })
}