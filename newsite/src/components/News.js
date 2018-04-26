import React, { Component } from 'react';
import './News.css';
import { Tab, Tabs} from 'react-bootstrap';
import { Modal, Button, Form, ControlLabel,FormControl,FormGroup,Checkbox
,Col, Glyphicon
} from 'react-bootstrap'; 


 class News extends Component {

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
      <div>
        <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
		  <Tab eventKey={1} title="Tab 1">
		    Tab 2 content
		  </Tab> 

		  <Tab eventKey={2} title="Tab 2">
		    
				 <div className="modal-container" style={{ height: 200 }}>
		        <Button
		          className="me"
		          bsStyle=""
		          bsSize="large"
		          onClick={() => this.setState({ show: true })}
		        ><Glyphicon glyph="align-left" /> 
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
              Contained Modal
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


		  </Tab>
		  <Tab eventKey={3} title="Tab 3" disabled>
		    Tab 3 content
		  </Tab>
		</Tabs>;
      </div>
    );
  }
}

export default News;
