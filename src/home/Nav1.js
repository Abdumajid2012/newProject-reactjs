import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const Nav1 = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="Nav11">
      <Container>
        <Row>
          <Col md="12">
          <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto logo">Frontend</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="Navbar">
            <NavItem className="NavItemm">
           <Link className="link" to="/">Home</Link> 
            </NavItem>
            <NavItem className="NavItemm">
            <Link className="link" to="/kurslar">
              Kurslar
            </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
          </Col>
        </Row>
      </Container>

    </div>
  );
}


export default Nav1;