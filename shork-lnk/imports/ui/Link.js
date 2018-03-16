import React from 'react'
import ReactDOM from 'react-dom'
import { Accounts } from 'meteor/accounts-base'

import PrivateHeader from './PrivateHeader'
import AddLink from './AddLink'
import LinksList from './LinksList'
import LinksListFilters from './LinksListFilters'

export default () => {
  return (
    <div>
      <PrivateHeader title='Your Links'/>
      <div className="page-content">
        <LinksListFilters />
        <AddLink/>
        <LinksList/>
      </div>
    </div>
  )
}