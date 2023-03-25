import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Contact from "./views/Contact";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>   
      </BrowserRouter>
      <Footer></Footer>         
    </div>
  );
}

export default App;