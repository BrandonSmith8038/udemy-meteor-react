import React from 'react'
import ReactDOM from 'react-dom'

export default class LinkListItem extends React.Component {
  
  render() {
    return(
      <div>
        <p>{this.props.url}</p>
        <p>{this.props.shortUrl}</p>
      </div>
    )
  }
}

LinkListItem.propTypes = {
  _id: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  userId: React.PropTypes.string.isRequired,
  shortUrl: React.PropTypes.string.isRequired
}

