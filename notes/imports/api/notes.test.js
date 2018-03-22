import { Meteor } from 'meteor/meteor' 
import expect from 'expect'
import { Notes } from './notes'

if(Meteor.isServer){
  
  describe('Notes', function () {
    
    beforeEach(function() {
      Notes.remove({})
      
      Notes.insert(
        {
          _id: 'testNoteId1',
          title: 'My Title',
          body: 'My body for note',
          updatedAt: 0,
          userId: 'testUserId1'
        }
      )
    })
    
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
    
    it('Should remove note', function() {
      Meteor.server.method_handlers['notes.remove'].apply({ userId: 'testUserId1' }, ['testNoteId1'])
      
      expect(Notes.findOne({ _id: 'testNoteId1' })).toBeUndefined()
    })
    it('Should not remove not if unauthenticated', function(){
      
      expect(() => {
        Meteor.server.method_handlers['notes.remove'].apply({}, ['testNoteId1'])
      }).toThrow()
    })
    it('Should not remove note if invalid ID', function() {
      expect(() => {
        Meteor.server.method_handlers['notes.remove'].apply({userId: 'testUserId1'}, [])
      }).toThrow()
    })
  })
}