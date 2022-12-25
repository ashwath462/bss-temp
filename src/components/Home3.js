import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Home3 extends React.Component {
    render() {

        return (
            <React.Fragment>
                <section className="section home-3-bg" id="home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <div className="row align-items-center">
                                    <Col lg="5">
                                        <div className="mt-40 home-3-content">
                                            <h1 className="text-white font-weight-normal home-3-title display-4 mb-0">Optimize Your Service Business</h1>
                                            <p className="text-white-70 mt-4 f-15 mb-0">Ut enim ad minima veniam quis nostrum exercitationem ullam corporis at suscipit laboriosam nisi ut aliquid a commodi consequatur Quis autem.</p>
                                            <div className="mt-5">
                                                <Link to="#" className="btn btn-custom mr-3">Learn More</Link>
                                                <Link to="http://vimeo.com/99025203" className="video-play-icon text-white"><i className="mdi mdi-play play-icon-circle text-white mr-2"></i>
                                                    <span className="f-14">Watch Video!</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg="7">
                                        <div className="mt-40 home-3-content position-relative p-4">
                                            <img src="images/ipad-img.png" alt="" className="img-fluid mx-auto d-block home-2-img" />
                                        </div>
                                    </Col>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <Row>
                                    <div className="home-3-shape">
                                        <img src="images/home-3-shape.png" alt="" className="img-fluid mx-auto w-100 d-block" />
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
export default Home3;