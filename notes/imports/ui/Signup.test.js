import { Meteor } from 'meteor/meteor'
import React from 'react'
import expect from 'expect'
import { mount } from 'enzyme'

import { Signup } from './Signup'

if(Meteor.isClient){
  describe('Signup', function() {
    
    it('Should show error messages', function(){
      const error = 'Test Error Message'
      const wrapper = mount(<Signup createUser={() => {}}/>)
      
      wrapper.setState({ error })
      
      expect(wrapper.find('.error-msg').text()).toBe(error)
      
      wrapper.setState({ error: '' })
      expect(wrapper.find('p').length).toBe(0)
    })
    
    it('Should Call createUser with the form data', function() {
      const email = 'brandon@test.com'
      const password = 'password123'
      const spy = expect.createSpy()
      
      const wrapper = mount(<Signup createUser={spy}/>)
      
      wrapper.ref('email').node.value = email
      wrapper.ref('password').node.value = password
      
      wrapper.find('button').simulate('click')
      
      expect(spy.calls[0].arguments[0]).toEqual( { email, password })
      
    })
    
    it('Should set error if short password', function() {
      const email = 'brandon@test.com'
      const password = '123    '
      const spy = expect.createSpy()
      
      const wrapper = mount(<Signup createUser={spy}/>)
      
      wrapper.ref('email').node.value = email
      wrapper.ref('password').node.value = password
      
      wrapper.find('button').simulate('click')
      
      expect(wrapper.state('error').length).toBeGreaterThan(0)
      
    })
    
    it('Should Set createUser callback errors', function(){
      const password = 'password123!'
      const reason = 'This is why it failed'
      const spy = expect.createSpy()
      const wrapper = mount(<Signup createUser={spy}/>)
      
      wrapper.ref('password').node.value = password
      
      wrapper.find('button').simulate('click')
      
      spy.calls[0].arguments[1]({ reason })
      expect(wrapper.state('error')).toBe(reason)
      
      spy.calls[0].arguments[1]()
      expect(wrapper.state('error')).toBe('')
    })
    
  })
}