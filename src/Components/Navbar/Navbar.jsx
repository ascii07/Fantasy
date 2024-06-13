import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
   const downloadLink = '../../public/my.apk'; // Replace this URL with your file path or URL

   const handleDownload = () => {
    const link = document.createElement('a');
    link.href = downloadLink;
    link.setAttribute('download', 'ProGoApp.apk');
     document.body.appendChild(link);
    link.click();
     link.remove();
   };

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-text">WINNER GO</span>
      </div>
      <div className={`navbar-links ${isMobile ? 'mobile' : ''}`}>
        <a href="/home">Home</a>
        <a href="/Addiction">Game Addiction</a>
        <a href="/Fair">Fair Play Violation</a>
        <a href="/Legalities">Legalities</a>
        <div className="navbar-download">
          <button className="download-button" onClick={handleDownload}>DOWNLOAD APP</button>
        </div>
      </div>
      <div className="navbar-toggle" onClick={handleToggle}>
        {/* Hamburger menu icon */}
        <span className="navbar-toggle-icon">&#9776;</span>
      </div>
    </nav>
  );
};

export default Navbar;
