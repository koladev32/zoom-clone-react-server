import React from "react";
import {Container, Nav, NavDropdown, Navbar} from "react-bootstrap";

function CustomNavbar () {

    return (
        <Navbar collapseOnSelect expand="lg" bg="white">
            <Container>
                <Navbar.Brand href="#home" className="fs-1 text-primary">ZOOM</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link className="text-primary" href="#features">JOIN A MEETING</Nav.Link>
                        <NavDropdown className="text-primary" title="HOST A MEETING" id="collasible-nav-dropdown">
                            <NavDropdown.Item className="text-primary" href="#action/3.1">JOIN A MEETING</NavDropdown.Item>
                            <NavDropdown.Item className="text-primary" href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item className="text-primary" href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="text-primary" href="#features">SIGN IN</Nav.Link>
                        <Nav.Link className="btn btn-warning text-white sign-up" href="#features">SIGN UP, IT'S FREE</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default CustomNavbar;