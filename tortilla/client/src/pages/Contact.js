import React from 'react'
import Row from '../components/Row/index'
import Map from '../components/Map/index'

function Contact() {
    return (
        <div>
            <Row>
                <div className="col l3 offset-l3 m6 offset-m1">
                    <h5> Tortilleria Campos</h5>
                    <h6>Email: tortilleriacampos@gmail.com</h6>
                    <h6>Phone: 801-347-8284</h6>
                    <h6>775 South 900 West</h6>
                    <h6>Salt Lake City, UT 84104</h6>
                </div>
                <div className="col l6">
                    <Map />
                </div>
            </Row>            
        </div>
    );
};

export default Contact;