import React from 'react'
import { Session } from 'meteor/session'
import { Tracker } from 'meteor/tracker'

export default class LinksListFilters extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      showVisibile: false
    }
  }
  
  componentDidMount(){
    this.tracker = Tracker.autorun(() => {

      this.setState({showVisibile: Session.get('showVisibile')})
    })
  }
  
  componentWillUnmount(){
    this.tracker.stop()
  }
  
  render(){
    return (
      <div>
        <label>
          <input 
            type='checkbox' 
            onChange={(e) => {
                Session.set('showVisibile', !e.target.checked) 
            }}
            checked={!this.state.showVisibile}
          />
          Show Hidden Links
        </label>
      </div>
    )
  }
}
