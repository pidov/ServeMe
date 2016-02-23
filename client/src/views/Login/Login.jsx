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

  _login(creds) {
    console.log(creds);
    // TODO: Login to server
    this.setState({
      isLoading: true
    })
    setTimeout(() => this.setState({
      isLoading: false
    }), 500)
  }

  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props
    return (
      <div className="login-container">
        <h1>Logo</h1>
        <LoginForm isLoading={this.state.isLoading} onSubmit={this._login.bind(this)} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { users, auth } = state;
  const { isAuthenticated, errorMessage } = auth;

  return {
    users,
    isAuthenticated,
    errorMessage
  }
}

export default Login
