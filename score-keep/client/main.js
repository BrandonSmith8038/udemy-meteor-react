import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

import { Players } from './../imports/api/players'

Meteor.startup(function() {
  Tracker.autorun(function() {
    const players = Players.find().fetch()
    
    const renderPlayers = (players) => players.map(player => <p key={player._id}>{player.name} has {player.score} points(s)</p>) 
    
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
    
    Players.insert({
      name: 'Lily',
      score: 14
    })
})