import React from 'react'
import { connect } from 'react-redux'
import {Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'

class Dashboard extends React.Component {


  componentDidMount() {
    console.log(this.props);
    this._redirectIfLoggedIn()
  }

  componentDidUpdate() {
    this._redirectIfLoggedIn()
  }

  _redirectIfLoggedIn() {
    if (!this.props.isAuthenticated) {
      this.context.router.push('/login')
    }
  }

  render() {
   return (
      <Grid fluid={true}>
        <Row>
          <Col xs={3} className="sidebar">
            <ListGroup>
              <ListGroupItem href="/#/">Home</ListGroupItem>
              <ListGroupItem href="#link2">Link 2</ListGroupItem>
              <ListGroupItem onClick={() => {alert('Clicked')}}       >
                Trigger an alert
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col xs={9}>
            Content goes here
          </Col>
        </Row>
      </Grid>
    )
  }
}

Dashboard.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const { isAuthenticated} = state.auth;

  return {
    isAuthenticated
  }
}

export default connect(mapStateToProps)(Dashboard)
