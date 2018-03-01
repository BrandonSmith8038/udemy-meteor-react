import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

import { Players } from './../imports/api/players'

import TitleBar from './../imports/ui/TitleBar'
import AddPlayer from './../imports/ui/AddPlayer'
import Player from './../imports/ui/Player'


Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find().fetch()
    
    const renderPlayers = players => players.map(player => {
      return <Player key={player._id} player={player}/>
    })
    
    
    
    const title = 'Score Keep'
  
    const jsx =(
    <div>
      <TitleBar 
        title={title}
        subtitle='Created By Brandon Smith'
      />
      {renderPlayers(players)}
      <AddPlayer/>
    </div>
    
    )
      
    ReactDOM.render(jsx, document.getElementById('app'))
    })
    
    
})