import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import Typing from 'react-typing-animation';
import BackgroundSlideshow from 'react-background-slideshow'

import image1 from './images/home-7-1-bg.jpg';
import image2 from './images/home-7-2-bg.jpg';
import image3 from './images/home-7-3-bg.jpg';

class Home7 extends React.Component {
    
    render() {

        return (
            <React.Fragment>
                <section className="home-7-bg back-slide" id="home">
                <div className="bg-overlay" style={{ zIndex : "1" }}></div>
                <BackgroundSlideshow  images={[ image1, image2, image3 ]} />
                  
                    <div className="home-center" id="contentSlider">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="justify-content-center">
                                    <Col lg="8">
                                        <div className="mt-40 text-center home-5-content">
                                            <Typing speed={50}>
                                              <h1  className="text-white font-weight-light home-7-title mb-0"> <span className="element">Professional Landing Page Template</span></h1>
                                                <Typing.Reset count={1} delay={1000} />
                                                <h1  className="text-white font-weight-light home-7-title mb-0"> <span className="element">We are Creative</span></h1>
                                               <Typing.Reset count={1} delay={1000} />
                                                <h1  className="text-white font-weight-light home-7-title mb-0"> <span className="element"> We are Modern</span></h1>
                                              
                                            </Typing>
                                            <p className="text-white-70 font-weight-light mt-4 f-15 mb-0">Aliquam lorem ante dapibus in viverra quis feugiat a tellus hasellus viverra nulla ut metus varius laoreet uisque rutrum enean imperdiet tiam ultricies nisi vel augue urabitur as ullamcorper.</p>
                                            <div className="text-center search-form mt-5">
                                                <form action="#">
                                                    <input type="text" placeholder="Email" />&nbsp;
                                                    <button type="submit" class="btn rounded-pill btn-custom mt-10">SubCribe</button>
                                                </form>
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
export default Home7;