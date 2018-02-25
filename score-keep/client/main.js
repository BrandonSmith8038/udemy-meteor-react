import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'

const players = [
  {
    _id: '1',
    name: 'Lauren',
    score: 99,
    
  },
  {
    _id: '2',
    name: 'Cory',
    score: -1,
  },
  {
    _id: '3',
    name: 'Andrew',
    score: -12,
  }
  ]
  
  const renderPlayers = (playersList) => playersList.map(player => <p key={player._id}>{player.name} has {player.score} points(s)</p>) 

Meteor.startup(function() {
  const name = 'Mike'
  const title = 'Account Settings'
  
  const jsx =(
  <div>
    <h1>{title}</h1>
    <p>Hello {name}!</p>
    <p>This is my second paragraph.</p>
    {renderPlayers(players)}
  </div>
  )
    
 
  
  
  ReactDOM.render(jsx, document.getElementById('app'))
})