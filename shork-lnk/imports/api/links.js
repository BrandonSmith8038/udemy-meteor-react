import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import SimpleSchema from 'simpl-schema'
import shortId from 'shortid'

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
    
    new SimpleSchema({
      url: {
        type: String,
        label: 'Your Link',
        regEx: SimpleSchema.RegEx.Url
      }
    }).validate({ url })

    Links.insert({
      _id: shortId.generate(),
      url,
      userId: this.userId,
      visibile: true,
      visitedCount: 0,
      lastVisitedAt: null
    })
  },
  'links.setVisibility'(_id, visibile){
    if(!this.userId){
      throw new Meteor.Error('Not Authorized')
    }
    new SimpleSchema({
      _id: {
        type: String,
        min: 1,
      },
      visibile: {
        type: Boolean
      }
    }).validate({ _id, visibile })
    Links.update({_id: _id, userId: this.userId},{$set: {visibile}})
  },
  'links.trackVisit'(_id){
    new SimpleSchema({
      _id: {
        type: String,
        min: 1,
      }
    }).validate({ _id })
    Links.update({_id}, {
      $set: {
        lastVisitedAt: new Date().getTime()
      },
      $inc: {
        visitedCount: 1
      }
    })
  }
  
})