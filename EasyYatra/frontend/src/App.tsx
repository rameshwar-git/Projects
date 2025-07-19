import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './index.css'
import Home from './pages/home/home';
import Profile from './pages/profile';
import SignUpPage from "./pages/signin/SignUpPages";
import Error404 from "./Error404";

import Navbar from './nav/Navbar';

const App: React.FC=()=>(
  <div className="container mx-auto container-fluid place-content-center">
  <Router>
      <Routes>
      <Route path="/" element={<SignUpPage/>}/>
      <Route path="/profile" element={<Profile/>}/> 
      <Route path="/home" element={<Home/>}/>
      <Route path="/signin" element={<SignUpPage/>}/>
      <Route path="/*" element={<Error404/>}/>
    </Routes>
  </Router>
  </div>
);

export default App;
