import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Button,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators
} from 'reactstrap';
import img from '../../../src/assets/images/hero-5-img.png';

class Section extends Component {
    constructor(props){
        super(props);
        this.state = {
            items : [
                {
                    id : 1,
                    h1 : "A Clean & Minimal Landing Template",
                    p : "At vero eos et accusamus et iusto odio dignissimos ducimus a qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint cupiditate.",
                    href : "#"
                },
                {
                    id : 2,
                    h1 : "Professional, Multipurpose Landing Page",
                    p : "At vero eos et accusamus et iusto odio dignissimos ducimus a qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint cupiditate.",
                    href : "#"
                },
                {
                    id : 3,
                    h1 : "Performancect Solution For Small Businesses",
                    p : "At vero eos et accusamus et iusto odio dignissimos ducimus a qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint cupiditate.",
                    href : "#"
                }
            ],
            activeIndex : 0
        }
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
    }

    onExiting(){
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex : nextIndex });
      }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex : nextIndex });
    }
    
    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex : newIndex });
    }

    render() {
        //create a slides variable and store all carousel items into it through a map array(map array will return Carousel Item and it's corresponding <div> tags)
        const slides = this.state.items.map((item) => {
            return(
                <CarouselItem
                    className = "align-items-center"
                    //tag = "div"
                    key = {item.id}
                    onExiting = {this.onExiting()}
                    onExited = {this.onExited()}
                >
                    <div className="align-items-center">
                        <div className="carousel-caption w-75 mx-auto">
                            <Container>
                                <Row className="justify-content-center">
                                    <Col lg={6}>
                                        <div className="text-center">
                                            <h1 className="text-white hero-4-title font-weight-light line-height-1_4 mb-4">{item.h1}</h1>
                                            <p className="text-white">{item.p}</p>
                                            <Button color="primary" href={item.href} className="mt-4">Learn More <span className="ml-2 right-icon">&#8594;</span></Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </CarouselItem>
        )}
        );

        return (
            <React.Fragment>
                <section className="hero-5-bg position-relative bg-warning" id="home">
                    <div className="bd-example w-100">
                        <div>
                            <div>
                                <Carousel
                                    activeIndex = {this.state.activeIndex}
                                    next = {this.next}
                                    previous = {this.previous}
                                >
                                    <CarouselIndicators items={this.state.items} activeIndex = {this.state.activeIndex} onClickHandler = {this.goToIndex} className="align-items-center my-0" />
                                    {/* Render Slides Variable(Which Contains Carousel Items) */}
                                    {slides}
                                    <CarouselControl direction="prev" onClickHandler = {this.previous} >
                                        <div className="slide-icon display-4">
                                            <i className="pe-7s-angle-left"></i>
                                        </div>
                                        <span className="sr-only">Previous</span>
                                    </CarouselControl>
                                    <CarouselControl direction="next" onClickHandler = {this.next}>
                                        <div className="slide-icon display-4">
                                            <i className="pe-7s-angle-right"></i>
                                        </div>
                                        <span className="sr-only">Next</span>
                                    </CarouselControl>
                                </Carousel>
                            </div>

                        </div>
                    </div>
                    <div className="hero-bottom-img">
                        <img src={img} alt="" className="img-fluid mx-auto d-block"/>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;