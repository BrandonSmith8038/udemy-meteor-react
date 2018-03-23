import { Meteor } from 'meteor/meteor'
import React from 'react'
import expect from 'expect'
import { mount } from 'enzyme'

import { PrivateHeader } from './PrivateHeader'

if(Meteor.isClient){
  describe('PrivateHeader', function(){
    const h1Title = 'Test Title'
    
    it('Should set button text to logout', function() {
      const wrapper = mount(<PrivateHeader title={h1Title} handleLogout={() =>{}}/>)
      
      const buttonText = wrapper.find('button').text()
      
      expect(buttonText).toBe('Logout')
    })
    
    it('Should use title prop as H1 text', function(){
      const wrapper = mount(<PrivateHeader title={h1Title} handleLogout={() =>{}}/>)
      
      const h1Text = wrapper.find('h1').text()
      
      expect(h1Text).toBe(h1Title)
    })
    
    it('Should call the lougout function on click', function(){
      const spy = expect.createSpy()
      const wrapper = mount(<PrivateHeader title={h1Title} handleLogout={spy}/>)
      
      wrapper.find('button').simulate('click')
      
      expect(spy).toHaveBeenCalled()
    })
  })
}