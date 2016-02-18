import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

import {Index} from './views/Index'
import {Dashboard} from './views/Dashboard'
import {Login} from './views/Login/Login'
import {NoMatch} from './views/NoMatch'

import styles from './app.css'

export const App = React.createClass({
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Index}>
          <Route path="/*" component={NoMatch}/>
        </Route>
      </Router>
    )
  }
})
