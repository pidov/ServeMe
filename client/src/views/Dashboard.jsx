import React from 'react'
import {Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'

class Dashboard extends React.Component {
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

export default Dashboard
