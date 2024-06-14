import React from 'react';
import './Home.css';
// Assuming the image path is provided for the new section, use it here
// import proGoImage from '../Assets/pro-go.png'; // Update the path according to your project structure
// import PRO2 from '../Assets/PRO2.png'; 
// import PRO3 from '../Assets/PRO3.png';
// import PROR from '../Assets/PROR.png';
import winner1 from '../Assets/winner1.png';
import winner2 from '../Assets/winner2.png';
import winner3 from '../Assets/winner3.png';
const HomePage = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../../public/winnergo.apk'; // Replace this URL with your file path or URL
    link.setAttribute('download', 'winnergo.apk');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  // const handleContactUs = () => {
  //   window.open('https://wa.me/yourwhatsappnumber', '_blank'); // Replace 'yourwhatsappnumber' with the actual number
  // };

  return (
    <div className="home-container">
      <section className="hero-section" id="home">
        <div className="hero-content">
          <h1>WINNER GO - IS THE MOST LOVED FANTASY GAME IN INDIA</h1>
          <p className="sub-text">100+ downloads daily</p>
          <div className="download-icon">
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
          </div>
          <p className="description">
          WINNER GO Fantasy merges the exhilaration of live sports with the excitement of strategic gameplay and competitive action.
          </p>
          <div className="hero-buttons">
            <button className="download-button" onClick={handleDownload}>DOWNLOAD NOW</button>
            {/* <button className="contact-button" onClick={handleContactUs}>CONTACT US</button> */}
          </div>
        </div>
        <div className="hero-image-container">
          <img src={winner3} alt="Mobile Mockup" className="hero-image" />
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-image-container">
          <img src={winner1} alt="About Pro Go" className="about-image" />
        </div>
        <div className="about-content">
          <h2>WE ARE DELIGHTED TO UNVEIL OUR EXCITING NEW DEVELOPMENT. – <span className="highlight">FANTASY SPORTS GAME WINNER GO!</span></h2>
          <p>
          WINNER GO offers a virtual arena where you can dive into the thrilling world of sports. Predict the outcomes of real matches and build your own teams with your favorite athletes. Success hinges on your skill and intuition!
          </p>
          <p>
            Don't miss your chance to be part of our fantasy sports community! Join WINNER Go and experience the exciting world of team sports now! Be the best, compete and have the incredible gaming fun that only WINNER Go can give you!
          </p>
        </div>
      </section>

      {/* New Pro Go Immersive World Section */}
      <section className="immersive-world-section">
        <div className="immersive-world-content">
          <h2>JOIN THE IMMERSIVE WORLD OF WINNER GO</h2>
          <p>
          WINNER GO is a fantasy sports game that goes beyond expectations. With its breathtaking graphics, extensive customization options, robust community features, real-time updates, and a rewarding system, it delivers an unmatched gaming experience. For sports enthusiasts eager to showcase their managerial skills, WINNER GO is the ultimate game. Dive into the immersive world of WINNER GO and get ready to be captivated by the excitement and thrill of virtual sports management.
          </p>
        </div>
        <div className="immersive-world-image">
          <img src={winner2} alt="Pro Go Mobile Mockup" className="pro-go-image" />
        </div>
      </section>

      {/* Pro Go Special Section */}
      <section className="wingo-special-section">
        <h2 className="section-title">WHAT MAKES WINNER GO UNIQUE?</h2>
        <p className="section-description">
        
It’s straightforward – our mission is to provide an immersive and engaging experience for our users. Get ready to step into a realm where you take on the roles of coach, manager, and owner of your own fantasy team.
        </p>
        <div className="special-features">
          <div className="special-feature">
            <h3>NOT JUST FOOTBALL</h3>
            <p>WINNER Go offers a wide range of sports disciplines, including cricket, basketball, hockey, golf, and much more.</p>
          </div>
          <div className="special-feature">
            <h3>USER-FRIENDLY INTERFACE</h3>
            <p>You don't have to spend a lot of time learning complex rules or features of the game – everything is simple and accessible even to beginners.</p>
          </div>
          <div className="special-feature">
            <h3>PLAY ON ANY DEVICE</h3>
            <p>We provide access to the game through our intuitive web platform and mobile application.</p>
          </div>
          <div className="special-feature">
            <h3>CAMARADERIE</h3>
            <p>Connect with sports enthusiasts who share your passion and engage in friendly banter and healthy competition.</p>
          </div>
        </div>
      </section>

      {/* How to Start Playing Section */}
      <section className="how-to-start-section">
        <h2 className="section-title">HOW TO START PLAYING ON THE WINNER GO PLATFORM?</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number"></div>
            <div className="step-content">
              <h3>Step 1: Download and install the Winner Go app</h3>
              <p>To do this, click the "Download" button. After installing the application, create your account. Make sure you enter the correct information to have access to all the platform's features.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number"></div>
            <div className="step-content">
              <h3>Step 2: Select your favorite sport</h3>
              <p>Once you select your preferred sport, you can follow matches, events, and team results to help you make informed decisions when building your team.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number"></div>
            <div className="step-content">
              <h3>Step 3: Create your team</h3>
              <p>Choose the players who will make up your team. Your task is to create the strongest team using your knowledge of sports and analytical data.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number"></div>
            <div className="step-content">
              <h3>Step 4: Participation in tournaments and competitions</h3>
              <p>Depending on the rules and conditions of the tournaments, you can receive points for your team's success and have a chance to win and prizes at the end of the season.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number"></div>
            <div className="step-content">
              <h3>Step 5: Study Strategies and Forecasts</h3>
              <p>To increase your chances of winning in fantasy sports, don't forget to explore the strategies and predictions available on the Winner Go platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* User Testimonials Section */}
      <section className="user-testimonials-section">
        <h2 className="section-title1">OUR PLAYERS SAY ABOUT WINNER GO</h2>
        <p className="section-description1">
        WINNER GO has taken the world by storm, allowing sports enthusiasts to become the virtual managers of their own teams.
        </p>
        <div className="testimonials-container">
          <div className="testimonial">
            <h3>Sunil</h3>
            <p>From the moment I dove into the world of WINNER GO, I was blown away by the sheer depth and realism of the game.</p>
          </div>
          <div className="testimonial">
            <h3>Vijay</h3>
            <p>The game boasts an impressive range of features and options, allowing players to customize their teams to their heart's content.</p>
          </div>
          <div className="testimonial">
            <h3>Kunal</h3>
            <p>The game leverages cutting-edge technology to ensure that player statistics, injuries, and other relevant information are constantly updated.</p>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="feature">
          <i className="fa fa-headset" aria-hidden="true"></i>
          <h3>24/7 SUPPORT</h3>
        </div>
        <div className="feature">
          <i className="fa fa-shield-alt" aria-hidden="true"></i>
          <h3>100% SAFE</h3>
        </div>
        <div className="feature">
          <i className="fa fa-chart-line" aria-hidden="true"></i>
          <h3>1M+ DOWNLOADS</h3>
        </div>
        <div className="feature">
          <i className="fa fa-star" aria-hidden="true"></i>
          <h3>4.68 RATING</h3>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
