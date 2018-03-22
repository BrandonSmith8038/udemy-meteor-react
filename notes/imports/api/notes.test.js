import { Meteor } from 'meteor/meteor' 
import expect from 'expect'
import { Notes } from './notes'

if(Meteor.isServer){
  
  describe('Notes', function () {
    
    const note1 = {
      _id: 'testNoteId1',
      title: 'My Title',
      body: 'My body for note',
      updatedAt: 0,
      userId: 'testUserId1'
    }
    const note2 = {
      _id: 'testNoteId2',
      title: 'My Title2',
      body: 'My body for note2',
      updatedAt: 0,
      userId: 'testUserId2'
    }
    
    beforeEach(function() {
      Notes.remove({})
      
      Notes.insert(note1)
      Notes.insert(note2)
    })
    describe('Inserting', function(){
    
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
    
    describe('Removing', function() {
    
      it('Should remove note', function() {
        Meteor.server.method_handlers['notes.remove'].apply({ userId: note1.userId }, [note1._id])
        
        expect(Notes.findOne({ _id: note1._id })).toBeUndefined()
      })
      
      it('Should not remove if unauthenticated', function(){
        
        expect(() => {
          Meteor.server.method_handlers['notes.remove'].apply({}, [note1._id])
        }).toThrow()
      })
      
      it('Should not remove note if invalid ID', function() {
        expect(() => {
          Meteor.server.method_handlers['notes.remove'].apply({userId: note1.userId}, [])
        }).toThrow()
      })
    
    })
    
    describe('Updating', function() {
    
      it('Should update a note', function(){
        const title = 'My New Title'
        Meteor.server.method_handlers['notes.update'].apply({
          userId: note1.userId
        }, [
            note1._id, 
            { title }
          ])
        
        const note = Notes.findOne(note1._id)
        
        expect(note).toMatchObject({
          title,
          body: note1.body
        })
        expect(note.updatedAt).toBeGreaterThan(0)
      })
      
      it('Should Throw An Error if Extra Updates', function(){
        const author = 'Brandon'
        expect(() => {
          Meteor.server.method_handlers['notes.update'].apply({
          userId: note1.userId
        }, [
            note1._id,
            { author }
          ])
        }).toThrow()
      })
      
      it('Should not update note if user was not creator', function(){
        const title = 'My New Title'
        Meteor.server.method_handlers['notes.update'].apply({
          userId: 'testId'
        }, [
            note1._id, 
            { title }
          ])
        
        const note = Notes.findOne(note1._id)
        
        expect(note).toEqual(note1)
      })
      
      it('Should not update if unauthenticated', function(){
        
        expect(() => {
          Meteor.server.method_handlers['notes.update'].apply({}, [note1._id])
        }).toThrow()
      })
      
      it('Should not update note if invalid ID', function() {
        expect(() => {
          Meteor.server.method_handlers['notes.update'].apply({userId: note1.userId}, [])
        }).toThrow()
      })
      
    })
    
    describe('Publications', function() {
      
      it('Should return a users notes', function(){
        const result = Meteor.server.publish_handlers.notes.apply({userId: note1.userId})
        
        const notes = result.fetch()
        
        expect(notes.length).toBe(1)
        expect(notes[0]).toEqual(note1)
      })
      
      it('Should return 0 notes for user that has none', function(){
        const result = Meteor.server.publish_handlers.notes.apply({userId: 'testId'})
        
        const notes = result.fetch()
        
        expect(notes.length).toBe(0)
      })
      
    })
  })
}