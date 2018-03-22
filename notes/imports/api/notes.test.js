import { Meteor } from 'meteor/meteor' 
import expect from 'expect'
import { Notes } from './notes'

if(Meteor.isServer){
  
  describe('Notes', function () {
    
    
    it('Should insert new note', function() {
      const userId = 'testId'
      const _id = Meteor.server.method_handlers['notes.insert'].apply({ userId })
      
      expect(Notes.findOne({ _id, userId })).toBeTruthy()
    })
    
    it('Should not insert not if not authenticated', function() {
      expect(() => {
        Meteor.server.method_handlers['notes.insert']()
      }).toThrow()
    })
    
  })
  
}