import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';
class Home extends Component {
  render() {
    let heading = "Soaring to new heights";
    let subheading = " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aspernatur ab maiores, quae pariatur, sequi facilis aperiam quos architecto nobis nulla omnis, nihil sunt cumque, animi a dolor dolore commodi!";
    return (

           // <div className="container">
           //    <section className="hero">
           //        <div className="hero-body">
           //           <div className="container">
           //              <h1 className="title">{ heading }</h1>
           //              <div className="is-two-thirds column is-paddingless">
           //                 <h2 className="subtitle is-4">{ subheading}</h2>
           //              </div>
           //               <Link to="/about"> 
           //                 <Button bsStyle="primary">About</Button> 
           //               </Link>
           //              <a className="button is-large is-primary" id="learn">Learn more</a>
           //           </div>
           //        </div>
           //    </section>
           // </div>


      <Grid>
          <Jumbotron>
            <h1 className="title">{ heading }</h1>
                    <div className="is-two-thirds column is-paddingless">
                        <h2 className="subtitle is-4">{ subheading}</h2>
                    </div>
            <Link to="/about"> 
            <Button bsStyle="primary">Learn more</Button> 
          </Link>
          </Jumbotron>


      </Grid>
    );
  }
}

export default Home;
