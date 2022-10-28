import React from "react";
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