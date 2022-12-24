import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {

        return (
            <React.Fragment>
                <section className="footer-bg">
                    <div className="container">
                        <Row>
                            <Col lg="4">
                                <div className="mb-5">
                                    <p className="text-uppercase text-dark footer-title mb-4">Why contact us</p>
                                    <p className="text-muted f-14">Vihaan is making waves in the industry by pioneering new ideas, strategies and approaches to funding clients. Keep up with the times by getting in touch with Vihaan today!</p>
                                </div>
                            </Col>

                            <Col lg="8">
                                <Row>
                                    <Col lg="4" >
                                        <div className="mb-5">
                                            <p className="text-uppercase text-dark footer-title mb-4">How do we help</p>
                                            <ul className="list-unstyled footer-sub-menu">
                                                <li className="f-14"><Link to="/" className="text-muted"> We use our in-house skills and expertise to assess the potential of any business, and provide entrepreneurs with the right kind of funding to grow their business.</Link></li>
                                               
                                            </ul>
                                        </div>
                                    </Col>

                                    <Col  lg="4">
                                        <div className="mb-5">
                                            <p className="text-uppercase text-dark footer-title mb-4">deserves better funding</p>
                                            <ul className="list-unstyled footer-sub-menu">
                                                <li className="f-14"><Link to="/" className="text-muted">We take every opportunity to not just fund, but also nurture promising start-ups like yours - so get in touch with us now!</Link></li>
                                               
                                            </ul>
                                        </div>
                                    </Col>

                                    
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default Footer;