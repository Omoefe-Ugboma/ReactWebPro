import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Modal, Form, FormGroup, ControlLabel, FormControl, Checkbox, Button} from 'react-bootstrap';
 
class About extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleHide() {
    this.setState({ show: false });
  }
  render() {
    return (
      <div className="modal-container" style={{ height: 200 }}>
        <Button
          bsStyle="primary"
          bsSize="medium"
          onClick={() => this.setState({ show: true })}
        >
          Launch contained modal
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              User registration Form
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          Please Fill the form Below to be registered on our database
             <Form horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2}>
      Email
    </Col>
    <Col sm={10}>
      <FormControl type="email" placeholder="Email" />
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={2}>
      Password
    </Col>
    <Col sm={10}>
      <FormControl type="password" placeholder="Password" />
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Checkbox>Remember me</Checkbox>
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Button type="submit">Sign in</Button>
    </Col>
  </FormGroup>
</Form>;


          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


export default About;
