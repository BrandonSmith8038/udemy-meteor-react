import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Session } from 'meteor/session'
import { Tracker } from 'meteor/tracker'

import FlipMove from 'react-flip-move'
import LinkListItem from './LinkListItem'
import { Links } from '../api/links'

export default class LinksList extends React.Component {
  
  constructor(props){
    super(props)
    
    this.state = {
      links: []
    }
  }
  
  componentDidMount(){
    this.linksTracker = Tracker.autorun(() => {
      
      Meteor.subscribe('links')
      
      const links = Links.find({
        visibile: Session.get('showVisibile')
      }).fetch()
  
      this.setState({ links })
  
    })
  }
  
  componentWillUnmount(){
    this.linksTracker.stop()
  }
  
  renderLinksListItems() {
    return this.state.links.map((link, index) => {
      //const shortUrl = Meteor.absoluteUrl(link._id)
      //Meteor.absoluteUrl is returning 0.0.0.0:8080
      const shortUrl = `https://udemy-meteor-react-cowboy8038.c9users.io/${link._id}`
      return <LinkListItem key={link._id} {...link} shortUrl={shortUrl}/>
    })  
  }
  
  render() {
    if(this.state.links.length < 1){
      return (
        <div className="item">
          <p className="item__status-message">No Links Found</p>
        </div>
      )
    }
    
    return (
      <div>
        <div>
          <FlipMove maintainContainerHeight={true}>
            {this.renderLinksListItems()}
          </FlipMove>
        </div>
      </div>
    )
  }
}