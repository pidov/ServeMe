import React from 'react'
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

export const LoginForm = React.createClass({
  render() {
   return (
      <div>
        <TextField
          hintText="john@doe.com"
          floatingLabelText="Email"
          fullWidth={true}/>
        <TextField
          hintText="I hope it's complex"
          floatingLabelText="Password"
          fullWidth={true}
          type="password"/>
        <br /><br />
        <RaisedButton label="Login" primary={true}/>
      </div>
    )
  }
})
