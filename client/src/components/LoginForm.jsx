import React from 'react'
import {Well, Input, Button} from 'react-bootstrap'

class LoginForm extends React.Component {
  constructor(props) {
    super (props);
  }

  render() {
   const {isLoading} = this.props
   return (
      <Well>
        <form onSubmit={this.props.onSubmit}>
          <Input
            type="text"
            placeholder="admin@serveme.com"
            label="Enter username below"
            ref="input"
            groupClassName="group-class"
            labelClassName="label-class"
            disabled={isLoading}
            />
          <Input
            type="password"
            placeholder="P@55w0rD"
            label="Enter your super secret pass below"
            ref="input"
            groupClassName="group-class"
            labelClassName="label-class"
            disabled={isLoading}
            />
          <Button
      	    type="submit"
      	    bsSize="sm"
      	    disabled={isLoading}>Login</Button>
        </form>
      </Well>
    )
  }
}

export default LoginForm
