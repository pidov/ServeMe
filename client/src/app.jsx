import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

import {Index} from './views/Index'
import {Dashboard} from './views/Dashboard'
import {Login} from './views/Login/Login'

import styles from './app.css'

export const App = React.createClass({
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Index} />
        <Route path="/dashbaord" component={Dashboard} />
        <Route path="/login" component={Login} />
      </Router>
    )
  }
})
