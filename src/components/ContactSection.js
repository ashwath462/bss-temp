import React from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class ContactSection extends React.Component {
    render() {

        return (
            <React.Fragment>
                <section className="section bg-light" id="contact">
                    <div className="container">
                        <div className="row">
                            <Col lg="12">
                                <div className="title-heading mb-5">
                                    <h3 className="text-dark mb-1 font-weight-light text-uppercase">Get in touch</h3>
                                    <div className="title-border-simple position-relative"></div>
                                </div>
                            </Col>
                        </div>

                        <Row>
                            <Col lg="12">
                                <div className="contact-box p-5">
                                    <Row>
                                        <Col lg="8" md="6">
                                            <div className="custom-form p-3">
                                                <div id="message"></div>
                                                <AvForm id="contact-form">
                                                    <Row>
                                                        <Col lg="6">
                                                            <div className="form-group app-label">
                                                                <AvField name="name" type="text" validate={{ required: { value: true } }}  placeholder="Name" />
                                                            </div>
                                                        </Col>
                                                        <Col lg="6">
                                                            <div className="form-group app-label">
                                                                <AvField name="email" type="text" errorMessage="Invalid Email" validate={{ required: { value: true }, email: { value: true } }} placeholder="Email" />
                                                            </div>
                                                        </Col>
                                                        <Col lg="12">
                                                            <div className="form-group app-label">
                                                                <AvField name="subject" type="text" validate={{ required: { value: true } }} placeholder="Subject" />
                                                            </div>
                                                        </Col>
                                                        <Col lg="12">
                                                            <div className="form-group app-label">
                                                                <AvField name="comments" type="textarea" validate={{ required: { value: true } }} rows="5"  placeholder="Message" />
                                                            </div>
                                                        </Col>
                                                        <Row>
                                                            <Col sm="12">
                                                              &nbsp; &nbsp;  <input type="submit" className="submitBnt btn btn-custom" value="Send Message" />
                                                                <div id="simple-msg"></div>
                                                            </Col>
                                                        </Row>

                                                    </Row>
                                                </AvForm>
                                            </div>
                                        </Col>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="contact-cantent p-3">
                                                <div className="contact-details">
                                                        <div className="float-left contact-icon mr-3 mt-2">
                                                        <a href="tel:+918896808657"><i className="mdi mdi-headphones text-muted h5"></i></a>
                                                        </div>
                                                        <div className="app-contact-desc text-muted pt-1">
                                                            <p className="mb-0 info-title f-13">Call :</p>
                                                            <a href="tel:+918896808657" style={{color:"#ff8700"}}>
                                                            <p className="mb-0 f-13">+91 8896808657</p>
                                                            </a>
                                                        </div>
                                                    
                                                </div>

                                                <div className="contact-details mt-2">
                                                    <div className="float-left contact-icon mr-3 mt-2">
                                                    <a href="tel:+918896808657"><i className="mdi mdi-email-outline text-muted h5"></i></a>
                                                    </div>
                                                    <div className="app-contact-desc text-muted pt-1">
                                                        <p className="mb-0 info-title f-13">Email :</p>
                                                        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=bhavyaseth.23@gmail.com" target="_blank" style={{color:"#ff8700"}}>
                                                            <p className="mb-0 f-13">bhavyaseth.23@gmail.com</p>
                                                        </a>
                                                    </div>
                                                </div>
                                                
                                                <div className="contact-details mt-2">
                                                    <div className="float-left contact-icon mr-3 mt-2">
                                                        <i className="mdi mdi-map-marker text-muted h5"></i>
                                                    </div>
                                                    <div className="app-contact-desc text-muted pt-1">
                                                        <p className="mb-0 info-title f-13">Location :</p>
                                                        <p className="mb-0 f-13" ><a href='https://www.google.com/maps/place/Kanpur,+Uttar+Pradesh/@26.4471054,80.1982971,11z/data=!3m1!4b1!4m5!3m4!1s0x399c4770b127c46f:0x1778302a9fbe7b41!8m2!3d26.449923!4d80.3318736' target="_blank" style={{color:"#ff8700"}}>Kanpur</a>/<a href='https://www.google.com/maps/place/Indore,+Madhya+Pradesh/@22.7239117,75.723764,11z/data=!3m1!4b1!4m5!3m4!1s0x3962fcad1b410ddb:0x96ec4da356240f4!8m2!3d22.7195687!4d75.8577258' target="_blank" style={{color:"#ff8700"}}>Indore</a> </p>
                                                    </div>
                                                </div>
                                               

                                                <div className="follow mt-4">
                                                    <h4 className="text-dark mb-3">Follow</h4>
                                                    <ul className="follow-icon list-inline mt-32 mb-0">
                                                        <li className="list-inline-item f-15"><Link to="#" className="social-icon text-muted"><i className="mdi mdi-facebook"></i></Link></li>&nbsp;
                                                        <li className="list-inline-item f-15"><Link to="#" className="social-icon text-muted"><i className="mdi mdi-twitter"></i></Link></li>&nbsp;
                                                        <li className="list-inline-item f-15"><Link to="#" className="social-icon text-muted"><i className="mdi mdi-google-plus"></i></Link></li>&nbsp;
                                                        <li className="list-inline-item f-15"><Link to="#" className="social-icon text-muted"><i className="mdi mdi-linkedin"></i></Link></li>&nbsp;
                                                        <li className="list-inline-item f-15"><Link to="#" className="social-icon text-muted"><i className="mdi mdi-whatsapp"></i></Link></li>&nbsp;
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default ContactSection;