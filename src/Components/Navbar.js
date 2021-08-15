import React, {Navbar} from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'

export const TopNavbar = () => {
  return (
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
        <Nav.Link href="#link">Skills</Nav.Link>
        <Nav.Link href="#link">Projects</Nav.Link>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );

};