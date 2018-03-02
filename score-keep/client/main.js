import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

//Players Collection in the Databse
import { Players, calculatePlayerPosition } from './../imports/api/players'

import App from './../imports/ui/App'

Meteor.startup(() => {
  Tracker.autorun(() => {
    
    //Fetch List Of Players In The Database
    const players = Players.find({}, {sort:{score: -1}}).fetch()
    const positionedPlayers = calculatePlayerPosition(players)
    
    const title = 'Score Keep'

    ReactDOM.render(<App title={title} players={positionedPlayers}/>, document.getElementById('app'))
    })
})