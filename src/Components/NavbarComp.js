import React, { Component } from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
            <div>
                <Navbar bg="blue" variant={"blue"} expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
        <Nav.Link as={Link} to={"/about"}>About</Nav.Link> 
        <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
        <Nav.Link as={Link} to={"/skills"}>Skills</Nav.Link>
        <Nav.Link as={Link} to={"/projects"}>Projects</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
            <div>
            <Switch>
          <Route path="/home">
           <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
           <Contact/>
          </Route>
          <Route path="/skills">
              <Skills/>
          </Route>
        </Switch> 
            </div>
            </Router>
        )
    }
}
