import React from "react";
import "./content.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Form from "react-bootstrap/Form";
// import { Button } from "@mui/material";
import Button from 'react-bootstrap/Button';

const Content = () => {
  return (
    <>
      <div className="details">
        <div>
          <p>Add a few more details.</p>
        </div>
        <div>
          <React.Fragment>
            <CssBaseline />
            <Container className="con" maxWidth="sm">
              <Box className="box">
                <div className="form">
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="labels">
                        Job Description
                      </Form.Label>
                      <Form.Control className="blanks" as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label className="labels">
                        Roles and responsibilities
                      </Form.Label>
                      <Form.Control className="blanks" as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="labels">Qualifications</Form.Label>
                      <Form.Control className="blanks" as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="labels">
                        Add skills/interest tags
                      </Form.Label>
                      <Form.Control
                        className="sblanks"
                        type="text"
                        placeholder="Search skills"
                      />
                    </Form.Group>
                    <div className="buttons">
                      <Button variant="outlined" className="button">Figma</Button>
                      <Button variant="outlined" className="button1">UI Design</Button>
                    </div>
                  </Form>
                </div>
              </Box>
            </Container>
          </React.Fragment>
        </div>
        <div id="next"> 
        <Button className="next" variant="outline-info">Next</Button>
        </div>
      </div>
    </>
  );
};
export default Content;
