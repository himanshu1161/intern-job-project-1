import React from "react";
import Nav from 'react-bootstrap/Nav';
import "./sidebar.css"
const Sidebar=()=>{
    return(<>
    <div className="list">

<Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link className="links" href="/home">Posted Jobs</Nav.Link>
      <hr/>
      <Nav.Link className="links" eventKey="link-1">Application</Nav.Link>
      <hr/>
      <Nav.Link className="links" eventKey="link-2">Messages</Nav.Link>
      <hr/>
    </Nav>
    </div>
    </>)
}

export default Sidebar;