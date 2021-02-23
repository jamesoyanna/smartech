import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import ServiceBox from "./services-box";

class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
          services: [
            {
              icon: "pe-7s-headphones service-icon",
              title: "Awesome Support",
              desc:
                "Customized 24hours online service with dedicated staff to attend to your request.",
            },
            {
              icon: "pe-7s-tools service-icon",
              title: "Solutions Business",
              desc:
                "providing you seamless integration with your existing project management and business tools or use as a stand-alone software system..",
            },
            {
              icon: "pe-7s-display1 service-icon",
              title: "Digital Design",
              desc:
                "Real-time pricing visibility based on urgency and availability. Digital design with excellence",
            },
            {
              icon: "pe-7s-cup service-icon",
              title: "Goal Business",
              desc:
                "Customized online contractual process with smart contract capabilities.",
            },
            {
              icon: "pe-7s-light service-icon",
              title: "Branding Identity",
              desc:
                "Supporting today’s mobile workforce requires a new approach and new technologies.Building your digital identity",
            },
            {
              icon: "pe-7s-graph1 service-icon",
              title: "Dynamic Growth",
              desc:
                "Help your organization to create an agile workplace solution that is collaborative and interconnected, in order to adapt to the ever-changing business demand and grow your team."
            },
          ],
        };
    }
    
    render() {
        return (
          <React.Fragment>
            <section className="section" id="services">
              <Container>
                <SectionTitle
                  title1="Our "
                  title2="Service"
                  desc="Fully automated service tracking system for centralized IT outsourcing."
                />

                <Row>
                  <ServiceBox services={this.state.services} />
                </Row>
              </Container>
            </section>
          </React.Fragment>
        );
    }
}

export default Service;