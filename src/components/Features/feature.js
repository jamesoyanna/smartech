import React, { Component } from 'react';
import { Container } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import FeatureBox from "./feature-box";

//Import Images
import feature1 from "../../assets/images/features/img-1.png";
import feature2 from "../../assets/images/features/img-2.png";
import feature3 from "../../assets/images/features/img-3.png";

class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
          features: [
            {
              id: 1,
              img: feature1,
              icon: "mdi  mdi-laptop-mac",
              title: "Activity Reporting",
              desc:
                " Our activity reporting service is the final step in our service journey. Reporting service can be a point of pride that can be celebrated and creates a database of the great projects done in a given community. .",
              link: "/",
            },
            {
              id: 2,
              img: feature2,
              icon: "mdi  mdi-account-group",
              title: "Team Management",
              desc:
                "We have been at the forefront of providing quality HR solutions to organizations through our onsite & offsite HR solutions. We are a team of experienced and trusted HR experts and we constantly strive to bring in new technologies & service offerings to the Human Resource domain.",
              link: "/",
            },
            {
              id: 3,
              img: feature3,
              icon: "mdi  mdi-chart-bell-curve",
              title: "Marketing Analysis",
              desc:
                "Extract information from the client you serve –both shoppers and non-shoppers– benchmark your performance and find out what they actually think about your business.",
              link: "/",
            },
          ],
        };
    }

    render() {
        return (
            <React.Fragment>
            <section className="section" id="features">
                <Container>
                                <SectionTitle
                                    title1="Our "
                                    title2="Features"
                                    desc="Our featured products are tailored to your business needs. That is why we have crafted the best solution for you."
                                />

                            <FeatureBox features={this.state.features} />
                </Container>
            </section>
            </React.Fragment>
        );
    }
}

export default Features;