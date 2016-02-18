import React from 'react'
import Paper from 'material-ui/lib/paper';
import LoginStyles from './LoginStyles.css'
import {LoginForm} from '../../components/LoginForm'

export const Login = React.createClass({
  render() {
   return (
      <div className="login-container">
        <h1>Logo</h1>
        <Paper className="login-content">
          <LoginForm />
        </Paper>
      </div>
    )
  }
})

