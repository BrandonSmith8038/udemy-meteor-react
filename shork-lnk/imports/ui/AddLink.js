import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'

export default class AddLink extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      url: ''
    }
  }
  
  onChange(e){
    this.setState({
      url: e.target.value.trim()
    })
  }
  
  onSubmit(e){
    e.preventDefault()
    
    const url = this.state.url
    
    if(url){
      Meteor.call('links.insert', url, (err, res) => {
        if(!err){
          this.setState({url: ''})  
        }
      })
    }
  }
  
  render(){
    return (
      <div>
        <p>Add Link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input 
            type="text" 
            placeholder="URL" 
            value={this.state.url}
            onChange={this.onChange.bind(this)}
          />
          <button>Add Link</button>
        </form>
      </div>
    )
  }
}