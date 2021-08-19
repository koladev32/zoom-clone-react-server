import React from 'react';
import {Button, Container, NavDropdown, Navbar, Nav, Form, NavLink} from 'react-bootstrap'
import './App.css';

function App() {
return (
<div className="App">
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

  <div className="container">
    <div>
      <h3 className="text-center">Join meeting</h3>
      <Form className="col-md-4 col-sm-8 mx-auto">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-muted">Meeting ID</Form.Label>
          <Form.Control type="text" placeholder="Enter meeting ID" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>By clicking "Join", you agree to our <a href="#">Terms of Services</a> and <a href="">Privacy Statement</a></Form.Label>
        </Form.Group>
        <Button className="w-100 rounded-3" type="submit">Join</Button>
      </Form>
    </div>
  </div>
</div>
);
}

export default App;