import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

import { Players } from './../imports/api/players'

import TitleBar from './../imports/ui/TitleBar'
import AddPlayer from './../imports/ui/AddPlayer'
import PlayerList from './../imports/ui/PlayerList'


Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find().fetch()
    
    const title = 'Score Keep'
  
    const jsx =(
    <div>
      <TitleBar 
        title={title}
        subtitle='Created By Brandon Smith'
      />
      <PlayerList players={players}/>
      <AddPlayer/>
    </div>
    
    )
      
    ReactDOM.render(jsx, document.getElementById('app'))
    })
    
    
})