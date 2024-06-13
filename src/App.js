// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Terms from './Pages/Terms';
import './App.css';
import PrivacyPolicy from './Pages/Privacy';
import Disclamier from './Pages/Disclamier';
import ResponsibleGaming from './Pages/Gaming';
import FairPlayViolation from './Pages/Fair';
import GameAddiction from './Pages/Addiction';
import Legalities from './Pages/Legalities';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Place Navbar outside Routes to display on all pages */}
        
        <Routes>
          {/* Update Route to use element prop */}
          <Route path="/" element={<Home />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Privacy" element={<PrivacyPolicy />} />
          <Route path="/Disclamier" element={<Disclamier />} />
          <Route path="/Gaming" element={<ResponsibleGaming />} />
          <Route path="/Fair" element={<FairPlayViolation />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Addiction" element={<GameAddiction />} />
          <Route path="/Legalities" element={<Legalities />} />
          {/* Add more routes here as needed */}
        </Routes>

        <Footer /> {/* Place Footer outside Routes to display on all pages */}
      </div>
    </Router>
  );
}

export default App;

