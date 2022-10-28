import React from "react";
import Content from "../content/Content";
import Sidebar from "../sidebar/Sidebar";
import Upperbar from "../upperbar/Upperbar";
import "./postjob2.css";
const Postjob2 = () => {
  return (
    <div className="postjob2container">
      <Upperbar />
      <div className="postjob2">
        <Sidebar />
        <div className="content">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Postjob2;
