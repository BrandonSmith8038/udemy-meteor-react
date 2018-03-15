import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'


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
      
      const links = Links.find().fetch()
  
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
    return (
      
      <div>
        {this.renderLinksListItems()}
      </div>
      
    )
  }
}