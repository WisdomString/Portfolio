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
      
      
      <NavDropdown title="More Info About" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1-sorry still no page yet">Haniel</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2-sorry still no page yet">Nephilim</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3-sorry still no page yet">Dullah</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4-sorry still no page yet">Diana</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.5-sorry still no page yet">Discord Mods</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.6-sorry still no page yet">CLP and Wisdom-Cube</NavDropdown.Item>
      </NavDropdown>
   
    </Nav>
  
  </Navbar.Collapse>
</Container>
</Navbar>
        </>
    )
}

export default navbar
