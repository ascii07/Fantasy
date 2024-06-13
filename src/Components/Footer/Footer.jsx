import React from 'react';
import './Footer.css';
import paytm from '../../Assets/paytm.jpeg';
import rupay from '../../Assets/rupay.jpeg';
import master from '../../Assets/master.jpeg';
import american from '../../Assets/american.jpeg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>WINNER GO</h2>
          <p>WINNER GO is a fantasy sports game that exceeds all expectations</p>
        </div>
        <div className="footer-nav">
          <a href="/home">HOME</a>
          
          <a href="/Gaming">Responsibe Gaming</a>
          
          
          
          <a href="/Terms">TermsAndCondition</a>
          <a href="/Privacy">PrivacyPolicy</a>
          
          <a href="/Disclamier">Disclaimer</a>
        </div>
        <div className="footer-payment">
          <img src={rupay} alt="RuPay" />
          <img src={master} alt="MasterCard" />
          
          <img src={american} alt="AMEX" />
          <img src={paytm} alt="Paytm" />
       
        </div>
        <div className="footer-disclaimer">
          <p>18+</p>
          <p>DISCLAIMER</p>
          <p>Geographical Restrictions
          Location Compliance: Our platform is not accessible from states where DFS is prohibited, including Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana.</p>
          <p>This game involves an element of financial risk and may be addictive.</p>
          <p>Please play responsibly at your own work.</p>
          <p>© 2024 WINNER GO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
