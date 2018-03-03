import {Router, Route, browserHistory} from 'react-router'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'
import React from 'react'
import ReactDOM from 'react-dom'

import Signup from '../imports/ui/Signup'
import Link from '../imports/ui/Link'
import NotFound from '../imports/ui/NotFound'
import Login from '../imports/ui/Login'

const unAuthenticatedPages = ['/', '/signup']
const authenticatedPages = ['/links']

const onEnterPublicPage = () => {
  if(Meteor.userId()){
    browserHistory.replace('/links')
  }
}

const onEnterPrivatePage = () => {
  if(!Meteor.userId()){
    browserHistory.replace('/')
  }
}

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login} onEnter={onEnterPublicPage} />
    <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
    <Route path="/links" component={Link} onEnter={onEnterPrivatePage}/>
    <Route path="*" component={NotFound}/>
  </Router>
)


Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId()
  const pathName = browserHistory.getCurrentLocation().pathname
  
  const isUnauthenticatedPage = unAuthenticatedPages.includes(pathName)
  const isAuthenticatedPage = authenticatedPages.includes(pathName)
  
  if(isUnauthenticatedPage && isAuthenticated){
    browserHistory.replace('/links')
  } else if(isAuthenticatedPage && !isAuthenticated){
    browserHistory.replace('/')
  }
  
  console.log(isAuthenticated)
})

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'))
})