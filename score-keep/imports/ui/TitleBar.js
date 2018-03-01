import React from 'react'
import ReactDOM from 'react-dom'

export default class TitleBar extends React.Component{
  renderSubTitle(){
    if(this.props.subtitle){
      return <h3 className="title-bar__subtitle">{this.props.subtitle}</h3>
    }
  }
  
  render(){
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          {this.renderSubTitle()}
        </div>
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