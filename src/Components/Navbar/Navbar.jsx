import React from 'react';
import './Navbar.css';

const Navbar = () => {
  // This is the link to the file you want to download.
  const downloadLink = '../../public/my.apk'; // Replace this URL with your file path or URL

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = downloadLink;
    link.setAttribute('download', 'ProGoApp.apk'); // This attribute prompts the browser to download the file
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-text">PRO GO</span>
      </div>
      <div className="navbar-links">
        <a href="/home">Home</a>
        <a href="/Addiction">Game Addiction</a>
        <a href="/Fair">Fair Play Violation</a>
        <a href="/Legalities">Legalities</a>
      </div>
      <div className="navbar-download">
        <button className="download-button" onClick={handleDownload}>DOWNLOAD APP</button>
      </div>
    </nav>
  );
};

export default Navbar;
