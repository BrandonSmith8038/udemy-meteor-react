import { Meteor } from 'meteor/meteor'
import React from 'react'
import expect from 'expect'
import { mount } from 'enzyme'

import { Login } from './Login'

if(Meteor.isClient){
  describe('Login', function() {
    
    it('Should show error messages', function(){
      const error = 'Test Error Message'
      const wrapper = mount(<Login loginWithPassword={() => {}}/>)
      
      wrapper.setState({ error })
      
      expect(wrapper.find('.error-msg').text()).toBe(error)
      
      wrapper.setState({ error: '' })
      expect(wrapper.find('p').length).toBe(2)
    })
    
    it('Should Call loginWithPassword with the form data', function() {
      const email = 'brandon@test.com'
      const password = 'password123'
      const spy = expect.createSpy()
      
      const wrapper = mount(<Login loginWithPassword={spy}/>)
      
      wrapper.ref('email').node.value = email
      wrapper.ref('password').node.value = password
      
      wrapper.find('button').simulate('click')
      
      expect(spy.calls[0].arguments[0]).toEqual( { email })
      expect(spy.calls[0].arguments[1]).toBe(password)
      
    })
    
    it('Should Set loginWithPassword callback errors', function(){
      const spy = expect.createSpy()
      const wrapper = mount(<Login loginWithPassword={spy}/>)
      
      wrapper.find('button').simulate('click')
      
      spy.calls[0].arguments[2]({})
      expect(wrapper.state('error')).toNotBe('')
      
      spy.calls[0].arguments[2]()
      expect(wrapper.state('error')).toBe('')
    })
    
  })
}