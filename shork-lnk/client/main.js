import {Router, Route, browserHistory} from 'react-router'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'
import React from 'react'
import ReactDOM from 'react-dom'

import Signup from '../imports/ui/Signup'
import Link from '../imports/ui/Link'
import NotFound from '../imports/ui/NotFound'
import Login from '../imports/ui/Login'

const unAuthenticatedPages = ['/', '/signup','/signup/']
const authenticatedPages = ['/links','/links/']

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/links" component={Link}/>
    <Route path="*" component={NotFound}/>
  </Router>
)


Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId()
  const pathName = browserHistory.getCurrentLocation().pathname
  
  const isUnauthenticatedPage = unAuthenticatedPages.includes(pathName)
  const isAuthenticatedPage = authenticatedPages.includes(pathName)
  
  if(isUnauthenticatedPage && isAuthenticated){
    browserHistory.push('/links')
  } else if(isAuthenticatedPage && !isAuthenticated){
    browserHistory.push('/')
  }
  
  console.log(isAuthenticated)
})

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'))
})