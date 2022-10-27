import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Upperbar from "../upperbar/Upperbar";
import "./postjob2.css"
const Postjob2 = () => {
  return (
    <div className="postjob2container">
      <Upperbar />
      <div className="postjob2">
        <Sidebar />
        <div className="content">content</div>
      </div>
    </div>
  );
};

export default Postjob2;
