import React from 'react'
import LoginStyles from './LoginStyles.css'
import LoginForm from '../../components/LoginForm'

class Login extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      isLoading: false
    }
  }

  _login(synthetic, reactId, event) {
    // TODO: Login to server
    this.setState({
      isLoading: true
    })
    setTimeout(() => this.setState({
      isLoading: false
    }), 500)
  }

  render() {
    return (
      <div className="login-container">
        <h1>Logo</h1>
        <LoginForm isLoading={this.state.isLoading} onSubmit={this._login.bind(this)}/>
      </div>
    )
  }
}

export default Login
