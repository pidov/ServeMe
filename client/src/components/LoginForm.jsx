import React, { PropTypes } from 'react'
import {Well, Input, Button} from 'react-bootstrap'

class LoginForm extends React.Component {
  constructor(props) {
    super (props);
  }

  handleSubmit(event) {
    event.preventDefault();

    const creds = {
      username: this.refs.username.getValue().trim(),
      password: this.refs.password.getValue().trim()
    }
    this.props.onSubmit(creds)
  }

  render() {
   const {isLoading, errorMessage} = this.props
   return (
      <Well>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <Input
            type="text"
            placeholder="admin@serveme.com"
            label="Enter username below"
            ref="username"
            groupClassName="group-class"
            labelClassName="label-class"
            disabled={isLoading}
            />
          <Input
            type="password"
            placeholder="P@55w0rD"
            label="Enter your super secret pass below"
            ref="password"
            groupClassName="group-class"
            labelClassName="label-class"
            disabled={isLoading}
            />
          {errorMessage &&
            <p>{errorMessage}</p>
          }
          <Button
      	    type="submit"
      	    bsSize="sm"
      	    disabled={isLoading}>Login</Button>
        </form>
      </Well>
    )
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  isLoading: PropTypes.bool
}

export default LoginForm
