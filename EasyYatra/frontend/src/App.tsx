import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './index.css'
import Home from './pages/home';
import Profile from './pages/profile';
import Navbar from "./nav/Navbar";

const App: React.FC=()=>(
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/> 
    </Routes>
  </Router>
);

export default App;
