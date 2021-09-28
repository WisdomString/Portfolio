import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import '../css/main.css'
import Img from 'react-bootstrap/Image'
import clp from './clp.png'

function navbar() {
    return (
        <>
        
    <Navbar collapseOnSelect expand="lg" variant="dark" className="Navbar" sticky="top">
            
<Container >
  <Navbar.Brand href="#home"><Img width="40" height="40" src={clp} roundedCircle /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="me-auto">
      
      
    </Nav>
   
    <Nav>
      
      
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
   
    </Nav>
  
  </Navbar.Collapse>
</Container>
</Navbar>
        </>
    )
}

export default navbar
