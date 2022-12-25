import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Home2 extends React.Component {
    render() {

        return (
            <React.Fragment>
                <section className="section home-1-bg" id="home">
                    <div className="home-8-bg-overlay"></div>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="justify-content-center">
                                    <Col lg="7">
                                        <div className="home-1-title text-center">
                                            <h1 className="text-dark font-weight-normal mb-0">A Clean & Minimal Landing Template</h1>
                                            <p className="text-muted home-subtitle mt-4 f-15 mb-0">Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid a commodi consequatur Quis autem vel eum iure reprehenderit qui in ea voluptate.</p>
                                            <div className="watch-video mt-5">
                                                <Link to="#" className="btn btn-custom">Learn More</Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="container-fluid">
                                <Row>
                                    <div className="home-1-shape">
                                        <img src="images/home-shape.png" alt="" className="img-fluid mx-auto w-100 d-block" />
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default Home2;