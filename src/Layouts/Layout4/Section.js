import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="hero-4-bg position-relative d-flex align-items-center bg-light" id="home">
                    <div className="hero-4-bg-overlay"></div>
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={6}>
                                <h1 className="text-dark hero-4-title font-weight-light line-height-1_4 mb-4">Grow With Your Business & Be <span className="font-weight-normal">The Best Entrepreneur.</span></h1>
                                <p className="text-muted">At vero eos et accusamus et iusto odio dignissimos ducimus a qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint cupiditate.</p>
                                <button className="btn btn-warning mt-4">Learn More <span className="ml-2 right-icon">&#8594;</span></button>
                            </Col>
                            <Col lg={{size:4, offset:2}}>
                                <div className="hero-login-form mx-auto bg-white p-4 rounded mt-5 mt-lg-0">
                                    <div className="text-center">
                                        <p className="text-muted mb-2 f-13 text-uppercase">Welcome To Deoxa</p>
                                        <h5 className="form-dark mb-4">Get 30 Days Free Trial</h5>
                                    </div>
                                    <Form className="registration-form">
                                        <FormGroup className="mb-4">
                                            <Label for="exampleFormControlInput1" className="f-15">Your Name*</Label>
                                            <Input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" required/>
                                        </FormGroup>
                                        <FormGroup className="mb-4">
                                            <Label for="exampleFormControlInput1" className="f-15">Your email*</Label>
                                            <Input type="email" className="form-control" id="exampleFormControlInput2" placeholder="" required/>
                                        </FormGroup>
                                        <FormGroup className="mb-4">
                                            <Label for="exampleFormControlInput1" className="f-15">Password*</Label>
                                            <Input type="password" className="form-control" id="exampleFormControlInput3" placeholder="" required/>
                                        </FormGroup>
                                        <Button type="submit" color="warning" size="sm" block >Get Started <i className="mdi mdi-telegram ml-2"></i></Button>
                                    </Form>
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