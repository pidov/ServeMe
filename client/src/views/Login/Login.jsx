import React from 'react'
import { connect } from 'react-redux'
import LoginStyles from './LoginStyles.css'
import LoginForm from '../../components/LoginForm'
import { loginUser } from '../../actions'

class Login extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      isLoading: false
    }
  }

  componentDidMount() {
    this._redirectIfLoggedIn()
  }

  componentDidUpdate() {
    this._redirectIfLoggedIn()
  }

  _redirectIfLoggedIn() {
    if (this.props.isAuthenticated) {
      this.context.router.push('/')
    }
  }

  _login(creds) {
    console.log(creds);
    this.props.dispatch(loginUser(creds));
  }

  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props

    return (
            <div>
      {!isAuthenticated &&
        <div className="login-container">
          <h1>Logo</h1>
          <LoginForm isLoading={this.state.isLoading} onSubmit={this._login.bind(this)} />
        </div>
      }

      {isAuthenticated &&
        <div> Hello user </div>
      }
      </div>
    )
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
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

export default connect(mapStateToProps)(Login)
