import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../About/About.jsx'
import Pohoto from "../Pohoto/Pohoto.jsx";
import Gallery from "../Gallery/Gallery.jsx";
import Groups from "../Groups/Groups.jsx";
const Routers = () => {
    return (
      <div>
        <Routes>
          <Route path="/" index element={<Pohoto />} />
          <Route path="/gellerus" element={<Gallery />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    );
};

export default Routers;