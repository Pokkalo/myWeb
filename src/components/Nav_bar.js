import React from 'react'
import { Alert, Carousel, Nav,Navbar, NavDropdown, Container } from 'react-bootstrap';

const Nav_bar = () => {
  return (
    <>
    <Navbar variant='dark' className='--nav-style mx-auto ' expand="lg">
  <Container className=''>
    <Navbar.Brand href="#home">Pakklo Property</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#/hi">Header</Nav.Link>
        <Nav.Link href="#about">About Me</Nav.Link>
        <Nav.Link href="#services">My Services</Nav.Link>
        <Nav.Link href="#experience">Experience</Nav.Link>
        <Nav.Link href="#contact">Contact Me</Nav.Link>

        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Another action
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            Separated link
          </NavDropdown.Item>
        </NavDropdown> */}

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
  )
}

export default Nav_bar