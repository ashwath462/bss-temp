import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class AboutSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            AboutList: [{ },
            ]
        };
    }

    render() {

        return (
            <React.Fragment>
                <section className="section bg-about bg-light-about bg-light" id="about">
                    <div className="container">
                        <Row>
                            <Col lg="4">
                                <div className="title-heading mb-5">
                                    <h3 className="text-dark mb-1 font-weight-light text-uppercase">About Us</h3>
                                    <div className="title-border-simple position-relative"></div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            {this.state.AboutList.map((about, index) => {
                                return <Col lg="4" key={index}>
                                            
                                        </Col>
                              })}
                         </Row>

                        <Row className="align-items-center mt-5">
                            <Col md="6">
                                <div className="about-desc">
                                    <h3 className="text-dark mb-3 font-weight-light">Vihaan - 'Start-up helping a Start-up'</h3>
                                    <p className="text-muted f-15">We know life can get hard. Vihaan is here to help you be the best you can be - in good and bad time.Vihaan is the one-stop hub for entrepreneurs and enterprise companies who want to leverage the power of a start-up ecosystem. With our one-of-a-kind contract-based platform, you can assemble your team, find out exactly what you need and get access to everything at once.</p>
                                    <div className="about-by">
                                        
                                    </div>
                                </div>
                            </Col>

                            <Col md="6">
                                <div className="about-img light-img position-relative p-4">
                                    <img src="images/about-img.jpg" alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default AboutSection;