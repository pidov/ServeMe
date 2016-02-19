import React from 'react'
import { Link } from 'react-router'

import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Index extends React.Component {
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
          <NavItem eventKey={1} href="/#/login">Login</NavItem>
          <NavItem eventKey={2} href="/#/register">Register</NavItem>
          <NavItem eventKey={3} href="/#/dashboard">Dashboard</NavItem>
        </Nav>
      </Navbar>
        {this.props.children}
      </div>
    )
  }
}

export default Index
