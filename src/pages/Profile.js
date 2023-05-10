import React from 'react'

import React, {useState} from 'react';
import { Alert, Carousel, Nav,Navbar, NavDropdown, Container } from 'react-bootstrap';

import {Helmet} from "react-helmet";

import Nav_bar from './components/Nav_bar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Window from './components/Window';

const Profile = () => {

    const [submit, setSubmit] = useState(false)

  return (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Pokkalo Property</title>
            <link rel="canonical" href="http://mysite.com/example" />
            <meta name="description" content="Pokkalo Property" />
        </Helmet>


        {submit === true? 
        <Window closeWindow = {()=> {
        setSubmit(!submit)
        }}/> 
        : null}
        
        <Nav_bar/>
        <Header/>
        <About/>


        <div className='--app-ser-bgsize'>
            <Container >
                <Services/>
            </Container>
        </div>


        <Experiences/>

        <div className="" style={{background: "#f3bc3c"}}>
            <Container className=' py-5'>
                <Contact isSubmit = {submit => setSubmit(submit)} var = {submit}/>
            </Container>
        </div>
    </div>
  )
}

export default Profile