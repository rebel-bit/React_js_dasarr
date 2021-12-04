import React from "react";
import {Navbar,Container,Nav } from 'react-bootstrap'

const NavbarComponent = () => {
    return (

  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar navbar-default navbar-fixed-top">
  <Container>
  <Navbar.Brand id="l">Toko motor</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features" id="l">Features</Nav.Link>
      <Nav.Link href="#pricing" id='l'>Pricing</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets" id="l">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes" id="l">
        Xcode store Motor
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default NavbarComponent