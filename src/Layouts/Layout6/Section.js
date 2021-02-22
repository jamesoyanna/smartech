import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Button,
} from 'reactstrap';
import Particles from 'react-particles-js';
import img from '../../assets/images/hero-6-bg.jpg';

class Section extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="hero-6-bg position-relative vh-100 d-flex align-items-center" style={{background: `url(${img}) center center no-repeat`}} id="home">
                    <div className="bg-overlay op-75">
                        <Particles
                            params={{
                                "particles": {
                                    "number": {
                                        "value": 55
                                    },
                                    "size": {
                                        "value": 4
                                    }
                                },
                                "interactivity": {
                                    "events": {
                                        "onhover": {
                                            "enable": true,
                                            "mode": "repulse"
                                        }
                                    }
                                },
                                "move" : {
                                    "radius" : 1
                                }
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
                                    <h1 className="text-white hero-4-title font-weight-light line-height-1_4 mb-4">Simple Project Management Tools for Setup!</h1>
                                    <p className="text-white-70">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam.</p>
                                    <Button color="warning" className="mt-4" >Learn More <span className="ml-2 right-icon">&#8594;</span></Button>
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