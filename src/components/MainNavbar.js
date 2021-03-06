import React from "react";
import {
  Navbar,
  Nav,
} from "react-bootstrap";

const MainNavbar = () => {
  return (
    <>
      <Navbar
        bg="primary"
        variant="dark"
        expand="lg"
        fixed="top"
        className="mainnav"
        style={{ top: "0" }}
      >
        <Navbar.Brand href="/">PGP 4 Noobs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="https://discord.gg/ZFvXwMUjjh">
              Join Our Discord!
            </Nav.Link>
            <Nav.Link href="https://www.paypal.com/paypalme/demigodproductions">
              Donate to the Devs
            </Nav.Link>
            {/*
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
              */}
          </Nav>

          {/*
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          */}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MainNavbar;
