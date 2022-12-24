import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class FeatureSection extends React.Component {
    render() {

        return (
            <React.Fragment>
                <section className="section bg-features bg-light" id="features">
                    <div className="container">
                        <Row>
                            <Col className="col-lg-12">
                                <div className="title-heading mb-5">
                                    <h3 className="text-dark mb-1 font-weight-light text-uppercase">Our Services</h3>
                                    <div className="title-border-simple position-relative"></div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col lg="6">
                                <div className="features-content">
                                    <div className="features-icon">
                                        <i className="pe-7s-science text-primary"></i>
                                    </div>
                                    <h4 className="font-weight-normal text-dark mb-3 mt-4">Connecting Start-ups</h4>
                                    <p className="text-muted f-14">VIHAAN will let the start-up’s join hands together and grow together.   The company will just find everything on a single platform, no need  for pitching in emails and forms of different companies.</p>         
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className="features-img mt-32">
                                    <img src="images/features-img/img-1.png" alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>

                <section className="section bg-features">
                    <div className="container">
                        <Row className="align-items-center">
                            <Col lg="6">
                                <div className="features-img">
                                    <img src="images/features-img/img-2.png" alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className="features-content mt-32">
                                    <div className="features-icon">
                                        <i className="pe-7s-shuffle text-primary"></i>
                                    </div>
                                    <h4 className="font-weight-normal text-dark mb-3 mt-4">Providing internship </h4>
                                    <p className="text-muted f-14">Vihaan aims to lay out various internships and job offerings for students.Vihaan will furnish students with significant benefits, and there will be an all-in-one menu for entrepreneurs eventually eliminating the need for them to pitch on many firms' emails and forms.
</p>
                                    
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>

                <section className="section bg-features bg-light">
                    <div className="container">
                        <Row className="align-items-center">
                            <Col lg="6">
                                <div className="features-content">
                                    <div className="features-icon">
                                        <i className="pe-7s-display1 text-primary"></i>
                                    </div>
                                    <h4 className="font-weight-normal text-dark mb-3 mt-4">24/7 support</h4>
                                    <p className="text-muted f-14">Vihaan provides round the clock support to make sure things never slow down for you. Whether that's after hours or over weekends, we're always available for whatever you need when it matters most.</p>
                                    
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className="features-img mt-40">
                                    <img src="images/features-img/img-3.png" alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
                
               
                
               
               
            </React.Fragment>
        );
    }
}
export default FeatureSection;