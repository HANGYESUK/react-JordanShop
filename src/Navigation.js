import React from 'react'
import { Navbar, Container, Nav, Button }  from 'react-bootstrap';
import './Navigation.css'

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" className='navi'>
        <Container>
          <Navbar.Brand href="/">JordanShop</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  )
}

export default Navigation