import React from 'react'
import ReactDOM from 'react-dom'
import FlipMove from 'react-flip-move';

import Player from './Player'

export default class PlayerList extends React.Component {
  
  renderPlayers(){
    if(this.props.players.length === 0) {
      return (
      <div className="item">
        <p className="item__message">Add A Player To Get Started</p>
      </div>
      )
    } else {
        return this.props.players.map(player => {
          return <Player key={player._id} player={player}/>
        })
      }
  }
  
  render(){
    return(
      <div>
        <FlipMove 
        duration={250} 
        maintainContainerHeight={true}
        easing="ease-out">
          {this.renderPlayers()}
        </FlipMove>
      </div>
    )
  }
}

PlayerList.propTypes = {
  players: React.PropTypes.array.isRequired
}