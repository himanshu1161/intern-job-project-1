import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Upperbar from "../upperbar/Upperbar";
const Postjob = () => {
  return (
    <div className="postjobcontainer">
      <Upperbar />
      <div className="postjob">
        <Sidebar />
        <div className="content">content</div>
      </div>
    </div>
  );
};

export default Postjob;
