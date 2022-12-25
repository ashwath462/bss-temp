import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


class ServiceSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ServiceList: [{
                "icon": "mdi mdi-database",
                "title": "Connectivity made easy",
                "content": "Vihaan is a global platform where start-ups can share their ideas and connect with others all over the world. There's no need to worry about language barriers as Vihaan provides easy to use interfaces in different languages!",
            }, {
                "icon": "mdi mdi-palette",
                "title": "The world is your office",
                "content": "Vihaan allows you to connect with entrepreneurs, businesses and mentors across the globe without having to leave your desk. Stay connected and get help/advice whenever you need it.",
            }, 
            {
                "icon": "mdi mdi-finance",
                "title": "No more isolation",
                "content": "Vihaan allows you to network with like-minded individuals from around the world and tap into their wealth of knowledge. All content on Vihaan is open for viewing so there’s no need for any privacy concerns!",
            },{
                "icon": "mdi mdi-yin-yang",
                "title": "Community Support",
                "content": "We offer community support from various communities spreaded across the globe. From what you need, be it marketing, finance or anything else, we'll have someone there to help you out. All our services are offered by different start-ups who are eager to help you succeed!",
            }, {
                "icon": "mdi mdi-apple-keyboard-command",
                "title": "Trusted Companies",
                "content": "We have many different trusted companies offering various services to caterer to your needs. Whatever it is that you need, whether it be marketing, finance etc., we will find a company willing and able to provide it!",
            }, {
                "icon": "mdi mdi-hexagon-multiple",
                "title": "We have it all covered",
                "content": "We provide end-to-end services, so you can focus on what you do best. From conception to scaling, our team of experts are here with you every step of the way",
            },
            ]
        };
    }

    render() {

        return (
            <React.Fragment>
                <section className="section" id="services">
                    <div className="container">
                        <Row>
                            <Col lg="12">
                                <div className="title-heading mb-5">
                                    <h3 className="text-dark mb-1 font-weight-light text-uppercase">Our Features</h3>
                                    <div className="title-border-simple position-relative"></div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            {this.state.ServiceList.map((service, index) => {
                                return <Col lg="4" md="6" key={index}>
                                    <div className="service-box rounded mt-4 p-4">
                                        <div className="service-icon mb-3">
                                            <i className={service.icon}></i>
                                        </div>
                                        <div className="services-desc">
                                            <div className="service-title mb-2 position-relative">
                                                <h5 className="font-weight-normal mb-3"><Link to="#" className="text-dark">{service.title}</Link></h5>
                                            </div>
                                            <p className="text-muted mb-3 f-14">{service.content}</p>
                                            
                                        </div>
                                    </div>
                                </Col>
                            })}
                        </Row>
                        
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default ServiceSection;