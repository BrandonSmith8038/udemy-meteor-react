import {routes, onAuthChange} from '../imports/routes/routes'
import { Links } from '../imports/api/links'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'
import React from 'react'
import ReactDOM from 'react-dom'


Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId()
  onAuthChange(isAuthenticated)
})



Meteor.startup(() => {
  /*Meteor.call('greetUser',(err, res) => {
    console.log('GreetUser Arguments', err, res)
  })*/
  
  Meteor.call('addNumbers', 14, 'Two', (err, res) => {
    if(err){
      console.log(err.message)
    } else {
      console.log('Add Numbers: ', res)
    }
  })
  
  ReactDOM.render(routes, document.getElementById('app'))
})