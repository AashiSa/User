import React from 'react';
import { Navbar , Nav ,Container, NavbarBrand } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
export const Header = () => {
  return (
    <>
    <Navbar bg="primary" variant="dark">
      <Container>
      <Navbar.Brand href="#home">USERS</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#add-user">Add Users</Nav.Link>
        <Nav.Link href="#logout">logout</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  </>

  )
}
