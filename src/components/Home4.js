import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';


class Home4 extends React.Component {

    
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({ isOpen: true })
  }

    render() {

        return (
            <React.Fragment>
                <section className="section home-4-bg" id="home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="align-items-center">
                                    <Col className="col-lg-6 position-static">
                                        <div className="mt-40 home-4-content">
                                            <h1 className="text-white font-weight-normal home-2-title mb-0">Simple And Clean But Professional</h1>
                                            <p className="text-white-70 mt-4 f-15 mb-0">Ut enim ad minima veniam quis nostrum exercitationem ullam corporis at suscipit laboriosam nisi ut aliquid a commodi consequatur Quis autem.</p>
                                            <div className="subcribe-form mt-5">
                                                <form>
                                                    <input type="text" className="mdi mdi-send  " placeholder="Enter Email.." />&nbsp;
                                                    <button type="submit" className="btn btn-w btn-custom-primary mt-10"> Get started</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="video-button">
                                            <Link to="#" onClick={this.openModal} className="video-play-icon"><i className="mdi mdi-play play-icon-circle text-primary position-relativer"></i></Link>
                                        </div>
                                    </Col>

                                    <Col lg="6" className="position-static">
                                        <div className="mt-40 home-4-img position-relative pl-5">
                                            <img src="images/home-4-img.png" alt="" className="img-fluid mx-auto d-block" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen}  onClose={() => this.setState({ isOpen: false })} />
            </React.Fragment>
          
        );
    }
}
export default Home4;