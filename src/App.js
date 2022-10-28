// import Profilepage from "./components/Profilepage";

import Postjob2 from "./postjob2/Postjob2";
import Signup from './empsignup/Signup';
import Empreg from './empsignup/Empreg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <Profilepage/> */}
      <Routes>
      <Route path="/" element={<Postjob2 />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/empreg" element={<Empreg/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
