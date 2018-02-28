import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

import { Players } from './../imports/api/players'

Meteor.startup(function() {
  Tracker.autorun(function() {
    const players = Players.find().fetch()
    
    const renderPlayers = (players) => players.map(player => <p key={player._id}>{player.name} has {player.score} points(s)</p>)
    
    const handleSubmit = function(e){
      
      const playerName = e.target.playerName.value
      if(playerName){
        
        Players.insert({
        name: playerName,
        score: 0
        })
        
        e.target.playerName.value = ''
          
        }
        e.preventDefault()
    }
    
    const name = 'Mike'
    const title = 'Account Settings'
  
    const jsx =(
    <div>
      <h1>{title}</h1>
      <p>Hello {name}!</p>
      <p>This is my second paragraph.</p>
      {renderPlayers(players)}
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Player Name" name="playerName"/>
      <button>Add Player</button>
      </form>
    </div>
    
    )
      
    ReactDOM.render(jsx, document.getElementById('app'))
    })
    
    
})