import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

import { Players } from './../imports/api/players'

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find().fetch()
    
    const renderPlayers = players => players.map(player => {
      return (
        <p key={player._id}>
          {player.name} has {player.score} points(s)
          <button onClick={() => Players.update({_id: player._id},{
            $inc: {score: 1} 
            })
          }>+1</button>
          <button onClick={() => Players.update({_id: player._id},{
            $inc: {score: -1} 
            })
          }>-1</button>
          <button onClick={() => Players.remove({_id: player._id})}>X</button>
        </p>
      ) 
    })
    
    const handleSubmit = e => {
      
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
    
    const title = 'Score Keep'
  
    const jsx =(
    <div>
      <h1>{title}</h1>
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