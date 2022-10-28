import React from "react";
<<<<<<< HEAD
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../images/logo.png";
import "./upperbar.css"
const Upperbar=()=>{
    return(
    <>
      <Navbar bg="light" expand="lg">
      <Container className="container">
      <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
            //   width="80"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            {/* React Bootstrap */}
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>)
}

export default Upperbar;
=======
import "./upperbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../images/logo.png";
// import Button from "@mui/material/Button";
import Button from 'react-bootstrap/Button';

import NotificationsIcon from "@mui/icons-material/Notifications";
const Upperbar = () => {
  return (
    <>
      <Navbar className="navbar" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <img
              alt=""
              src={logo}
              width="107px"
              height="70px"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <div className="nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                {" "}
                <Button className="button" variant="outlined">
                  Post a Job
                </Button>
              </Nav.Link>
              <div className="icon">
                <NotificationsIcon
                  style={{
                    color: " rgb(249, 116, 21)",
                    width: "37px",
                    height: "37px",
                  }}
                />
              </div>
              <p>Hello!</p>
              <NavDropdown title="Employer Name" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Upperbar;
>>>>>>> 78c0d35d92becd3ec74e4f336dec6571705b8f25
