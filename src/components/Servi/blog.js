import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import BlogBox from "./blog-box";

//Import Images
import blog1 from "../../assets/images/blog.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
          blogs: [
            {
              img: blog1,
              title: "Understanding the business of technology.",
              category: "Business, Corporate",
              date: "04",
              month: "Jan, 2021",
              desc:
                "Extract information from the community you serve –both shoppers and non-shoppers– benchmark your performance and find out what they actually think about your business.",
            },
            {
              img: blog2,
              title: "Collaborating as a tech team.",
              category: "Design, Designer",
              date: "12",
              month: "Feb, 2021",
              desc:
                "When tackling a major initiative like an acquisition or an overhaul of IT systems.",
            },
            {
              img: blog3,
              title: "Desigining a software project.",
              category: "Business, Corporate",
              date: "31",
              month: "Jan, 2021",
              desc:
                "Software design is a process to transform user requirements into some suitable form, which helps the programmer in software coding and implementation.",
            },
          ],
        };
    }
    
    render() {
        return (
          <>
            <section className="section" id="blog">
              <Container>
                <SectionTitle
                  title="Our Blog"
                  subtitle="News"
                  desc="Our curated blogs for your reading pleasure."
                />
                <Row className="mt-5 pt-2">
                  <BlogBox blogs={this.state.blogs} />
                </Row>
              </Container>
            </section>
          </>
        );
    }
}

export default Blog;