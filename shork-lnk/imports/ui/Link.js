import React from 'react'
import ReactDOM from 'react-dom'
import { Accounts } from 'meteor/accounts-base'
import { Links } from '../api/links'

import PrivateHeader from './PrivateHeader'
import AddLink from './AddLink'
import LinksList from './LinksList'

export default class Link extends React.Component {
  
  render(){
    return (
      <div>
        <PrivateHeader title='Your Links'/>
        <LinksList/>
        <AddLink/>
      </div>
    )
  }
}