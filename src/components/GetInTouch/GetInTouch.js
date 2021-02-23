import React, { Component } from 'react';
import { Container, Row, Col, Label, Button, FormGroup } from "reactstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';

//Import Section Title
import SectionTitle from "../common/section-title";

class GetInTouch extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        <SectionTitle
                            title1="Get In "
                            title2="Touch"
                            desc="Get in touch with us at any of our business centers."
                        />

                        <Row>
                            <Col lg={4}>
                                <div className="contact-address">
                                    <h4 className="text-dark mb-4">Contact Info</h4>
                                    <p className="text-muted f-15">12, Adeniyi jones, Ikeja, Lagos.</p>
                                    
                                </div>
                                <Row>
                                    <Col md={6}>
                                        <div className="contact-address">
                                            <h5 className="text-dark mb-3 f-16">Abuja Address</h5>
                                            <p className="text-muted f-15">14, Utaku district, Wuse Abuja</p>
                                        </div>
                                    </Col>
                                    
                                </Row>
                            </Col>

                            <Col lg={{size:7, offset:1}}>
                                <div className="custom-form mt-4 mt-lg-0">
                                    <div id="message"></div>
                                    <AvForm name="contact-form" id="contact-form">
                                        <Row>
                                            <Col lg={6}>
                                                <FormGroup className="app-label">
                                                    <Label for="name">Name</Label>
                                                    <AvField
                                                    name="name"
                                                    id="name"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Your name..."
                                                    errorMessage="Enter Your Name.."
                                                    validate={{ required: { value: true } }}
                                                />
                                                </FormGroup>
                                            </Col>
                                            <Col lg={6}>
                                                <FormGroup className="app-label">
                                                    <Label for="email">Email address</Label>
                                                    <AvField
                                                        name="email"
                                                        id="email"
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Your email..."
                                                        errorMessage="Enter Your email..."
                                                        validate={{
                                                            required: { value: true },
                                                            email: { value: true }
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg={12}>
                                                <FormGroup className="app-label">
                                                    <Label for="subject">Subject</Label>
                                                    <AvField
                                                        name="subject"
                                                        id="subject"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Subject.."
                                                        errorMessage="Enter Your PSubject"
                                                        validate={{
                                                            required: { value: true },
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg={12}>
                                                <FormGroup className="app-label">
                                                    <Label for="comments">Message</Label>
                                                    <textarea name="comments" id="comments" rows="3" className="form-control" placeholder="Enter message.."></textarea>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={12}>
                                                <Button type="submit" id="submit" name="send" color="warning">Send Message <i className="mdi mdi-telegram ml-2"></i></Button>
                                                <div id="simple-msg"></div>
                                            </Col>
                                        </Row>
                                    </AvForm>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default GetInTouch;