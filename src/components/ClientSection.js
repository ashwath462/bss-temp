import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";

import s from './images/sir.jpg'
import a from './images/ashwath.jpg'
import j from './images/jay.jpg'
import r from './images/ruchi.jpg';
import h from './images/hemant.jpg';

const styles = { height: 400, width: "50%" };

class ClientSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            autoplay: true
        };
    }
    onSelect = (active, direction) => {
        console.log(`active=${active} && direction=${direction}`);
    };
    visiableOnSelect = active => {
        console.log(`visiable onSelect active=${active}`);
    };
    slideNext = () => {
        this.slider.slideNext();
    };
    slidePrev = () => {
        this.slider.slidePrev();
    };
    goToSlide = () => {
        this.slider.goToSlide(4);
    };
    autoplay = () => {
        this.setState({ autoplay: !this.state.autoplay });
    };
    _changeIcon = () => {
        let { leftIcon, rightIcon } = this.state;
        leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />;
        rightIcon = rightIcon ? undefined : <span className="fa fa-music" />;
        this.setState({ leftIcon, rightIcon });
    };
    render() {
        return (
            <React.Fragment>

                <section className="section bg-clients" id="clients">
                    <div className="bg-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title-heading mb-5">
                                    <h3 className="text-white mb-1 font-weight-light text-uppercase">Our Team</h3>
                                    <div className="title-border-color position-relative"></div>
                                </div>
                            </div>
                        </div>

                        <Row>
                            <Col span={12} style={{ marginTop: 20 }}>
                                <RBCarousel
                                    version={4}
                                    autoplay={this.state.autoplay}
                                    pauseOnVisibility={true}
                                    onSelect={this.visiableOnSelect}
                                    slideshowSpeed={10000}
                                >
                                    <div className="item">
                                        <Row>
                                            <Col lg="6">
                                                <div className="testi-content">
                                                    <div className="testi-box mt-4">
                                                        <h4 className="text-white mb-3 font-weight-light">"CEO"</h4>
                                                        <p className="text-white-70 font-weight-light mb-0 f-15">I always did something that I was a little not ready to do. I think that, that is how you grow. When there’s a moment of ‘Wow, I’m not so sure that I can do this, and you push through those moments, it’s then that you have a breakthrough. Sometimes that’s a sign that something really great is about to happen. You’re about to grow and learn a lot more about yourself.</p>
                                                        <div className="quote-img">
                                                            <img src="images/hom" alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <div className="float-right ml-3">
                                                            <div className="client-img">
                                                                <img src={s} alt="" className="img-fluid rounded-circle" />
                                                            </div>
                                                        </div>
                                                        <div className="clients-name text-right pt-3">
                                                            <h6 className="text-white font-weight-normal position-relative f-17 mb-0"><span className="after-border"></span>Bhavya Seth</h6>
                                                            <p className="text-white-70 f-13 mb-0">Kanpur</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className="testi-content">
                                                    <div className="testi-box mt-4">
                                                        <h4 className="text-white mb-3 font-weight-light">"Manager"</h4>
                                                        <p className="text-white-70 font-weight-light mb-0 f-15">The question I ask myself like almost every day is, ‘Am I doing the most important thing I could be doing?’… Unless I feel like I’m working on the most important problem that I can help with, then I’m not going to feel good about how I’m spending my time. And that’s what this company is.</p>
                                                        <div className="quote-img">
                                                            <img src="images/quote-img.png" alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <div className="float-right ml-3">
                                                            <div className="client-img">
                                                                <img src={a} alt="" className="img-fluid rounded-circle" />
                                                            </div>
                                                        </div>
                                                        <div className="clients-name text-right pt-3">
                                                            <h6 className="text-white font-weight-normal position-relative f-17 mb-0"><span className="after-border"></span>Ashwath Arora</h6>
                                                            <p className="text-white-70 f-13 mb-0">Bhopal</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="item">
                                        <Row>
                                            <Col lg="6">
                                                <div className="testi-content">
                                                    <div className="testi-box mt-4">
                                                        <h4 className="text-white mb-3 font-weight-light">"Developer"</h4>
                                                        <p className="text-white-70 font-weight-light mb-0 f-15">Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.</p>
                                                        <div className="quote-img">
                                                            <img src="images/quote-img.png" alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <div className="float-right ml-3">
                                                            <div className="client-img">
                                                                <img src={r} alt="" className="img-fluid rounded-circle" />
                                                            </div>
                                                        </div>
                                                        <div className="clients-name text-right pt-3">
                                                            <h6 className="text-white font-weight-normal position-relative f-17 mb-0"><span className="after-border"></span> Ruchi Shah</h6>
                                                            <p className="text-white-70 f-13 mb-0">Indore</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className="testi-content">
                                                    <div className="testi-box mt-4">
                                                        <h4 className="text-white mb-3 font-weight-light">"Content Writer"</h4>
                                                        <p className="text-white-70 font-weight-light mb-0 f-15">“Do the one thing you think you cannot do. Fail at it. Try again. Do better the second time. The only people who never tumble are those who never mount the high wire. This is your moment. Own it.</p>
                                                        <div className="quote-img">
                                                            <img src="images/quote-img.png" alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <div className="float-right ml-3">
                                                            <div className="client-img">
                                                                <img src={j} alt="" className="img-fluid rounded-circle" />
                                                            </div>
                                                        </div>
                                                        <div className="clients-name text-right pt-3">
                                                            <h6 className="text-white font-weight-normal position-relative f-17 mb-0"><span className="after-border"></span>Jayant Hotwani</h6>
                                                            <p className="text-white-70 f-13 mb-0">Bhopal</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="item">
                                        <Row>
                                            <Col lg="6">
                                                <div className="testi-content">
                                                    <div className="testi-box mt-4">
                                                        <h4 className="text-white mb-3 font-weight-light">"R&D"</h4>
                                                        <p className="text-white-70 font-weight-light mb-0 f-15">A good marketing plan can’t be formed in just four hours. Plans are formed on extensive research.</p>
                                                        <div className="quote-img">
                                                            <img src="images/quote-img.png" alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <div className="float-right ml-3">
                                                            <div className="client-img">
                                                                <img src={h} alt="" className="img-fluid rounded-circle" />
                                                            </div>
                                                        </div>
                                                        <div className="clients-name text-right pt-3">
                                                            <h6 className="text-white font-weight-normal position-relative f-17 mb-0"><span className="after-border"></span>Hemant Singh</h6>
                                                            <p className="text-white-70 f-13 mb-0">Jabalpur</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </Col>
                                           
                                        </Row>
                                    </div>
                                </RBCarousel>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default ClientSection;