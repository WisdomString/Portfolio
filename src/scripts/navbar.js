import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import '../css/main.css'
import Img from 'react-bootstrap/Image'
import clp from './clp.png'
import {Link} from 'react-scroll'
import '../scripts/window1'

function navbar() {
  const open_discord_link = () =>{
    window.open("https://t.co/VPfL5POzIU?amp=1")
  }
  const wisdom_twitter_link = () =>{
    window.open("https://twitter.com/wisdom_box")
  }
    return (
        <>
        
<Navbar collapseOnSelect expand="lg" variant="dark" className="Navbar" sticky="top">
            
<Container >
      
        <Navbar.Brand href="home" ><Img width="40" height="40" src={clp} roundedCircle />
        
        </Navbar.Brand>
      
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="me-auto">
      
      
    </Nav>
   
    <Nav>
      
      
      <NavDropdown title="About" id="collasible-nav-dropdown" className="nav_dropdown">
        <Link className="haniel_slide" to="haniel" smooth={true} duration={1000}>
        <NavDropdown.Item href="About-Haniel">Haniel</NavDropdown.Item>
        </Link>

        <Link className="nephilim_slide" to="nephilim" smooth={true} spy={true} duration={1000}>
        <NavDropdown.Item href="About-Nephilim">Nephilim</NavDropdown.Item>
        </Link>

        <Link className="dullah_slide" to="dullah" smooth={true} duration={1000}>
        <NavDropdown.Item href="About-Dulla">Dulla</NavDropdown.Item>
        </Link>

        <Link className="dianna_slide" to="dianna" smooth={true} duration={1000}>
        <NavDropdown.Item href="About-Diana">Diana</NavDropdown.Item>
        </Link>
        <NavDropdown.Divider />
        
        <NavDropdown.Item href=""onClick={open_discord_link}>Cresent Link Discord</NavDropdown.Item>
        
        <NavDropdown.Item href=""onClick={wisdom_twitter_link}>FAN-Developer: Wisdom-Cube</NavDropdown.Item>
      
      </NavDropdown>
   
    </Nav>
  
  </Navbar.Collapse>
</Container>
</Navbar>

        </>
    )
}

export default navbar
