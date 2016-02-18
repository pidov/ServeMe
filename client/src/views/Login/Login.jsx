import React from 'react'
import LoginStyles from './LoginStyles.css'
import {LoginForm} from '../../components/LoginForm'

export const Login = React.createClass({
  render() {
   return (
      <div className="login-container">
        <h1>Logo</h1>
        <LoginForm />
      </div>
    )
  }
})

