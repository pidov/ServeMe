import React from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/lib/app-bar';
import FlatButton  from 'material-ui/lib/flat-button';

export const Index = React.createClass({
  render() {
    return (
      <div>
        <AppBar title="ServeMe" showMenuIconButton={false}>
          <div className="navigation" style={{marginTop: '15px'}}>
            <Link to="/login">
              <FlatButton  label="Login" primary={true}/>
            </Link>
            <Link to="/register">
              <FlatButton  label="Register" primary={true}/>
            </Link>
            <Link to="/dashboard">
              <FlatButton  label="Dashboard" primary={true}/>
            </Link>
          </div>
        </AppBar>
        {this.props.children}
      </div>
    )
  }
})
