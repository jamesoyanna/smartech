import React, { Component } from 'react';
import { Row, Col } from "reactstrap";

class FooterLinks extends Component {
    render() {
        return (
            <React.Fragment>
                        <Row className="mt-5">
                            <Col md={12}>
                                <div className="text-center text-muted">
                                    <p className="mb-0 f-15">2021 © smartech. Design by James Oyanna</p>
                                </div>
                            </Col>
                        </Row>
            </React.Fragment>
        );
    }
}

export default FooterLinks;