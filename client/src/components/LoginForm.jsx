import React from 'react'
import {Well, Input, Button} from 'react-bootstrap'

export const LoginForm = React.createClass({
  handleSubmit(e) {
    console.log('submittng the form', e)
  },
  render() {
   return (
      <Well>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            placeholder="admin@serveme.com"
            label="Enter username below"
            ref="input"
            groupClassName="group-class"
            labelClassName="label-class" />
          <Input
            type="password"
            placeholder="P@55w0rD"
            label="Enter your super secret pass below"
            ref="input"
            groupClassName="group-class"
            labelClassName="label-class" />
          <Button bsSize="medium">Login</Button>
        </form>
      </Well>
    )
  }
})
