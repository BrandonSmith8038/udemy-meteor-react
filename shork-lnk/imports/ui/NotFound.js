import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'


export default () => {
 return(
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>Page Not Found</h1>
        <p>Hmmmm, Something Went Wrong</p>
        <Link to="/" className="button button--link">
          Head Home
        </Link>
      </div>
    </div>
  )
}