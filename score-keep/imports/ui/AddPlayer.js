import React from 'react'
import ReactDOM from 'react-dom'
import { Players } from './../api/players'

export default class AddPlayer extends React.Component{
  
  handleSubmit(e){
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
  
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Player Name" name="playerName"/>
        <button>Add Player</button>
        </form>
      </div>
    )
  }
}