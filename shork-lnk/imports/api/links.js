import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

export const Links = new Mongo.Collection('links')

if(Meteor.isServer){
  Meteor.publish('links', () => {
    return Links.find({ userId: Meteor.userId() })
  })
}


Meteor.methods({
  'links.insert'(url){
    if(!this.userId){
      throw new Meteor.Error('Not Authorized')
    }
    Links.insert({
      url,
      userId: this.userId
    })
  }
})