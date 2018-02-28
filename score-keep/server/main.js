import { Meteor } from 'meteor/meteor'
import { Players } from './../imports/api/players'

Meteor.startup(function (){
  /*Players.insert({
    name: 'Amber',
    score: 7
  })*/
  console.log(Players.find().fetch())
})