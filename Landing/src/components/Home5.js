import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import Particles from 'react-particles-js';

class Home5 extends React.Component {
    render() {

        return (
            <React.Fragment>
                <section className="section home-5-bg" id="home">

                <Particles style={{ position : "absolute" }}
                        params={{ 
                            "particles": {
                                "number": {
                                    "value": 200
                                },
                                "size": {
                                    "value": 3
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "repulse"
                                    }
                                }
                            }
                        }} />
                 

                    <div className="bg-overlay"></div>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="justify-content-center">
                                    <Col lg="7">
                                        <div className="mt-40 text-center home-5-content">
                                            <div className="home-icon mb-4">
                                                <i className="mdi mdi-pinwheel mdi-spin text-white h1"></i>
                                            </div>
                                            <h1 className="text-white font-weight-normal home-5-title mb-0">A Clean & Minimal Landing Template</h1>
                                            <p className="text-white-70 mt-4 f-15 mb-0">Ut enim ad minima veniam quis nostrum exercitationem ullam corporis at suscipit laboriosam nisi ut aliquid a commodi consequatur Quis autem.</p>
                                            <div className="mt-5">
                                                <input className="btn btn-custom" type="button" value="Get started" />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default Home5;