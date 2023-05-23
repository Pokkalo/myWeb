import React from 'react'
import {Tabs, Tab, Container, Row, Col} from 'react-bootstrap';

import { FaMicrochip } from 'react-icons/fa'


const TabsForPJ = () => {
  return (
    <>
        <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
        >
            <Tab eventKey="home" title={<FaMicrochip/>}>
                <Container className=''>
                    <Row>
                        <Col sm={'auto'} md={12} lg={'auto'}>
                        
                            <img src={require("../imgs/demo.jpg")} alt="" 
                            
                            className='d-flex justify-content-center 
                            mx-auto'
                            />
                        </Col>
                        
                        <Col>
                            <div className="d-flex flex-column justify-content-center">
                            <h1>About me</h1>
                            <br />
                            <p class="lead">
                                Full name Lo Pak Hang, with a Engineering major aspiring to pursuing a career in programming. A Taekwondo enthusiast recognized as serious, concentrated and active by peer. Academically outstanding, with a knack of software skills in programming. Once developed and completed the robot arm with object classification as a warehouse picking system by using arduino in final year project, and developed an simple e-commerce webpage by React and Firebase
                            </p>
                            </div>
                        </Col>
                        
                    </Row>
                
                    
                    
                </Container>
            </Tab>
            <Tab eventKey="profile" title="Profile">
                
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
                
            </Tab>
        </Tabs>
    </>
  )
}

export default TabsForPJ