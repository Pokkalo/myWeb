

import React, {useState} from 'react';
import { Alert, Carousel, Nav,Navbar, NavDropdown, Container } from 'react-bootstrap';

import {Helmet} from "react-helmet";

import Nav_bar from "../Nav_bar"
import Header from "../Header"
import About from "../About"
import Services from "../Services"
import Experiences from "../Experiences"
import Contact from "../Contact"
import Window from "../Window"

const Profile = () => {

    const [submit, setSubmit] = useState(false)

  return (
    <div>

        {submit === true? 
        <Window closeWindow = {()=> {
        setSubmit(!submit)
        }}/> 
        : null}
        

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