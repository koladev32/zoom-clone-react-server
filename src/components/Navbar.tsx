import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

function CustomNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white">
      <Container>
        <Navbar.Brand href="#home" className="fs-1 text-primary">
          ZOOM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link className="text-primary" href="#features">
              <Link to="/">JOIN A MEETING</Link>
            </Nav.Link>
            <Nav.Link className="text-primary" href="#features">
              <Link to="/host">HOST A MEETING</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
