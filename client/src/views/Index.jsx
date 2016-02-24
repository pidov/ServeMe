import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { logoutUser } from '../actions'

class Index extends React.Component {
   constructor (props) {
    super (props)
  }

  handleLogout() {
    console.log(this.props)
    this.props.dispatch(logoutUser);
  }
  render() {
    return (
      <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/#/dashboard">Dashboard</NavItem>
          <NavItem eventKey={2} href="/#/register">Register</NavItem>
          <NavItem eventKey={3} href="/#/login">Login</NavItem>
          <NavItem eventKey={4} onClick={this.handleLogout.bind(this)}>Logout</NavItem>
        </Nav>
      </Navbar>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(Index)
