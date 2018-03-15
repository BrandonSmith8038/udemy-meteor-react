import React from 'react'
import ReactDOM from 'react-dom'
import Clipboard from 'clipboard'

export default class LinkListItem extends React.Component {
  
  constructor(props){
    super(props)
    
    this.state = {
      copied: false
    }
  }
  
  componentDidMount(){
    this.clipboard = new Clipboard(this.refs.copy)
    
    this.clipboard.on('success', () => {
      
      this.setState({copied: true})
      
      setTimeout(() => this.setState({copied: false}),1000)
      
    }).on('error', () => {
      alert('Unable To Copy, Please Manualy Copy The Link')
    })
  }
  
  componentWillUnmount(){
    this.clipboard.destroy
  }
  
  render() {
    return(
      <div>
        <p>{this.props.url}</p>
        <p>{this.props.shortUrl}</p>
        <button 
          ref="copy" 
          data-clipboard-text={this.props.shortUrl}
        >
          {this.state.copied ? 'Copied': 'Copy'}
        </button>
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

