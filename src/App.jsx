// import Login from "./Components/Authentication/Login";
// import Register from "./Components/Authentication/Register";
// import Footer from "./Components/Common/Footer";
// import Header from "./Components/Common/Header";
// import { HeroArea } from "./Components/HeroArea/HeroArea";

// export default function App() {
//   return (
//     <> 
//      <Register></Register>
    
//    <Header></Header>
//    <HeroArea></HeroArea>
//    <Routes>
//     <Route path="/login" element={<Login />} />
//     <Route path="/register" element={<Register />} />
//    </Routes>
//    <Footer></Footer>
//     </>
//   )
// }


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import Footer from "./Components/Common/Footer";
import Header from "./Components/Common/Header";
import Home from './Components/Home/Home';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}
