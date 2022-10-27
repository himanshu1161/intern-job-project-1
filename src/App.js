// import Profilepage from "./components/Profilepage";

import Postjob from "./postjob/Postjob";
import Signup from './empsignup/Signup';
import Empreg from './empsignup/Empreg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <Profilepage/> */}
       <Postjob/> 
      <Routes>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/empreg" element={<Empreg/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
