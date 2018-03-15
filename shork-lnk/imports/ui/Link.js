import React from 'react'
import ReactDOM from 'react-dom'
import { Accounts } from 'meteor/accounts-base'
import { Links } from '../api/links'

import PrivateHeader from './PrivateHeader'
import AddLink from './AddLink'
import LinksList from './LinksList'
import LinksListFilters from './LinksListFilters'

export default () => {
  return (
    <div>
      <PrivateHeader title='Your Links'/>
      <LinksListFilters />
      <LinksList/>
      <AddLink/>
    </div>
  )
}