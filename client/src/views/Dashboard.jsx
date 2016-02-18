import React from 'react'
import {Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'

export const Dashboard = React.createClass({
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
})

