import React from 'react'
import expect from 'expect'
import { mount } from 'enzyme'
import { Meteor } from 'meteor/meteor'
import NoteListItem from './NoteListItem'
import moment from 'moment'

if(Meteor.isClient){
  describe('NoteListItem', function(){
    
    it('Should render title and timestamp', function(){
      const title = 'This a note title'
      const updatedAt = moment().format('M/DD/YY')
      const wrapper = mount(<NoteListItem note={{ title, updatedAt }}/>)
      
      expect(wrapper.find('h5').text()).toBe(title)
      expect(wrapper.find('p').text()).toBe(updatedAt)
    })
    
    it('Should set default title if no title set', function(){
      const title = ''
      const updatedAt = moment().format('M/DD/YY')
      const wrapper = mount(<NoteListItem note={{ title, updatedAt }}/>)
      
      expect(wrapper.find('h5').text()).toBe('Untitled Note')
    })
    
  })
}