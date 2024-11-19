import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignupForm from "../src/components/SignupForm";
import LoginForm from "../src/components/LoginForm";


function App() {
  return(
   <Router>
    <Routes>
      <Route path="/signup" element={<SignupForm/>}/>
      <Route path="/login" element={<LoginForm/>}/>
    </Routes>
   </Router>
  )
}
export default App;