import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

import Index from './views/Index'
import Dashboard from './views/Dashboard'
import Login from './views/Login/Login'
import NoMatch from './views/NoMatch'

import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import bootstrapTheme from 'bootstrap/dist/css/bootstrap-theme.css'
import styles from './app.css'

class App extends React.Component {
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
}

export default App
