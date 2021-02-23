import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Button,
} from 'reactstrap';
import Particles from 'react-particles-js';
import img from '../assets/images/banner.png';

class Section extends Component {

    render() {
        return (
          <React.Fragment>
            <section
              className="hero-6-bg position-relative vh-100 d-flex align-items-center"
              style={{ background: `url(${img}) center center no-repeat` }}
              id="home"
            >
              <div className="bg-overlay op-75">
                <Particles
                  params={{
                    particles: {
                      number: {
                        value: 55,
                      },
                      size: {
                        value: 4,
                      },
                    },
                    interactivity: {
                      events: {
                        onhover: {
                          enable: true,
                          mode: "repulse",
                        },
                      },
                    },
                    move: {
                      radius: 1,
                    },
                  }}
                />
              </div>
              <Container>
                <Row className="justify-content-center">
                  <Col lg={6}>
                    <div className="hero-6-title-content text-center">
                      <div className="hero-6-title-icon mb-4">
                        <i className="mdi mdi-axis-arrow mdi-spin text-white h2"></i>
                      </div>
                      <h1 className="text-white hero-4-title font-weight-light line-height-1_4 mb-4">
                        Don't just manage your IT. Make it autonomous.
                      </h1>
                      <p className="text-white-70">
                        Gain access to experienced software teams and a world-class technology
                        platform to help you reduce the time, expense and issues
                        related to IT end-user computing..
                      </p>
                      <Button color="warning" className="mt-4">
                        Learn More{" "}
                        <span className="ml-2 right-icon">&#8594;</span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </React.Fragment>
        );
    }
}

export default Section;