import moment from 'moment'

export const notes = [
    {
      _id: 'noteid1',
      title: 'Test Title',
      body: 'This is the body',
      updatedAt: moment().format('M/DD/YY'),
      userId: 'userId1'
    },
    {
      _id: 'noteid2',
      title: '',
      body: 'This is the body',
      updatedAt: moment().format('M/DD/YY'),
      userId: 'userId2'
    }
  ]