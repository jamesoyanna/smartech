import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import img1 from '../../assets/images/hero-2-img.png';
import img2 from '../../assets/images/hero-2-shape.png';

class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="hero-2-bg position-relative d-flex align-items-center bg-gradient-primary" id="home">
                    <div className="hero-2-bg-overlay"></div>
                    <Container>
                        <div className="hero-2-content">
                            <Row className="align-items-center">
                                <Col lg={6}>
                                    <div className="hero-2-title pr-lg-5">
                                        <h1 className="hero-2-title text-white mb-4 font-weight-normal line-height-1_4">Make More Money, Delight Your Customers</h1>
                                        <p className="text-white-70 font-weight-light f-18 line-height-1_6 mb-5 ">Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam as eaque ipsaquaeab inventore.</p>
                                        <Link to="" className="btn btn-warning mr-lg-2"><i className="mdi mdi-link-variant mr-2"></i> Request Demo</Link>
                                        <Link to="" className="btn btn-light ml-1">Learn More</Link>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mt-5 mt-lg-0">
                                        <img src={img1} alt="" className="img-fluid d-block mx-auto"/>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <div className="hero-bottom-img">
                        <img src={img2} alt="" className="img-fluid d-block w-100 mx-auto"/>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;