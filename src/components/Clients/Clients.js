import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../../components/common/section-title";
import ClientsSlider from "./Clients-slider";

//Import Images
import client1 from "../../assets/images/user/person1.png";
import client2 from "../../assets/images/user/eb.jpg";
import client3 from "../../assets/images/user/san.jpg";
import client4 from "../../assets/images/user/person1.png";
import client5 from "../../assets/images/user/eb.jpg";

class Clients extends Component {
  state = {
    clients: [
      {
        image: client1,
        name: "Awoyemi Tola",
        post: "Web Developer",
        desc:
          "I had a great service from smartech.They provided me with the best IT service",
      },
      {
        image: client2,
        name: "Vincent Onoja",
        post: "Customer service officer",
        desc:
          "Their customer experience is top-notch. I like doing business wirh them",
      },
      {
        image: client3,
        name: "Kelvin Akande",
        post: "Chief Information Officer",
        desc:
          "My company was pleased with the services offered by smartech. They were really concern about our satisfaction.",
      },
      {
        image: client4,
        name: "Benedict Kalu",
        post: "Accountant",
        desc:
          "I had a great service from smartech.They provided me with the best IT service.",
      },
      {
        image: client5,
        name: "Tenitoluwa oloko",
        post: "Web Developer",
        desc:
          "I am super excited working with smartech. Its very rewarding.",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="clients">
          <Container>
            <SectionTitle
              title1="Our "
              title2="Clients"
              desc="We work with amazing clients all around the world. Our clients are happy with our services"
            />
            <Row>
              <Col lg={4}>
                <h3 className="font-weight-normal mt-3 line-height-1_4">
                  Some Words From Our{" "}
                  <span className="font-weight-medium text-warning">
                    Happy Clients{" "}
                  </span>
                </h3>
                <div className="testi-border my-4"></div>
                <p className="text-muted">
                 Our happy customers are always proud of our service.
                </p>
              </Col>
              <Col lg={8}>
                <ClientsSlider clients={this.state.clients} />
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Clients;