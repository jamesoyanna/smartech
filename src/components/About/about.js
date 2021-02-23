import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

class About extends Component {

    render() {
        return (
          <React.Fragment>
            <section className="section bg-light" id="about">
              <Container>
                <SectionTitle
                  title1="About "
                  title2="Us"
                  desc=" We keenly predicted the future of cutting-edge technologies and their impact on mission-critical business decisions. Our key goal is transforming how organizations manage their IT from the traditional manual approach into autonomous service delivery."
                />

                <Row>
                  <Col md={4}>
                    <h2 className="font-weight-light line-height-1_6 text-dark mb-4">
                      Passionate About upscaling your business
                    </h2>
                  </Col>
                  <Col md={{ size: 7, offset: 1 }}>
                    <Row>
                      <Col md={6}>
                        <h6 className="text-dark font-weight-light f-20 mb-3">
                          Our Mission
                        </h6>
                        <p className="text-muted font-weight-light">
                          We are on a mssion to help companies leverage on
                          technology to gain competitive advantage. We privde
                          the best platform for startups to leapfrog
                        </p>
                      </Col>
                      <Col md={6}>
                        <h6 className="text-dark font-weight-light f-20 mb-3">
                          Our Vision
                        </h6>
                        <p className="text-muted font-weight-light">
                          We want to transform the way companies interact & collaborate,
                          by providing our customers with industry-leading
                          processes and world-class expertise.
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </section>
          </React.Fragment>
        );
    }
}

export default About;