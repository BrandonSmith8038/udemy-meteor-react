import React from 'react'
import ReactDOM from 'react-dom'

export default class TitleBar extends React.Component{
  renderSubTitle(){
    if(this.props.subTitle){
      <h3>{this.props.subtitle}</h3>
    }
  }
  
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.renderSubTitle()}
      </div>
    )
  }
}

TitleBar.propTypes = {
  title: React.PropTypes.string.isRequired,
}

TitleBar.defaultProps = {
  // title: 'Default Title'
}