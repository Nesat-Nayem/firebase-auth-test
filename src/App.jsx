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
import AboutUs from './Components/AboutUs/AboutUs';
import EventDetails from './Components/EventDetails/EventDetails';
import EventList from './Components/EventList/EventList';
// import { events } from './data'; // Import your event data
import { events } from '../src/data'; // Import your event data

import { useAuthState } from 'react-firebase-hooks/auth'; // Import useAuthState
import { auth } from '../src/Components/Authentication/Login'; 
import PrivateRoute from './Privateroute/PrivateRoute';

export default function App() {
  const [user] = useAuthState(auth); 
  return (
    <Router>
      <Header user={user} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/event/:eventId" element={<PrivateRoute element={<EventDetails events={events} />} />} />
      </Routes>
      <Footer />
    </Router>
  );
}
