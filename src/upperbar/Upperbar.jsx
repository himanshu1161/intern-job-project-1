import React from "react";
import "./upperbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../images/logo.png";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
const Upperbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container className="container">
          <Navbar.Brand className="brand" href="#home">
            <img
              alt=""
              src={logo}
              //   width="80"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            {/* React Bootstrap */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Button className="button" variant="contained">
                Post Job
              </Button>
              <Button variant="contained" className="en">
                <NavDropdown title="Employer Name" id="basic-nav-dropdown">
                  {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item> */}
                </NavDropdown>
              </Button>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Upperbar;
