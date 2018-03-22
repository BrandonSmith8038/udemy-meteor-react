import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'
import moment from 'moment'
import SimpleSchema from 'simpl-schema'

export const Notes = new Mongo.Collection('notes')

Meteor.methods({
  'notes.insert'(){
    if(!this.userId){
      throw new Meteor.Error('Not-Authorized')
    }
    return Notes.insert({
      title: '',
      body: '',
      userId: this.userId,
      updatedAt: moment().valueOf()
    })
  },
  'notes.remove'(_id){
    if(!this.userId){
      throw new Meteor.Error('Not-Authorized')
    }
    new SimpleSchema({
      _id: {
        type: String,
        min: 1
      }
    }).validate({ _id })
    
    Notes.remove({ _id, userId: this.userId })
  }
})