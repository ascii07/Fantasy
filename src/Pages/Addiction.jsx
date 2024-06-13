import React from 'react';
import addiction from '../Assets/addiction.png';

const GameAddiction = () => {
  return (
    <div style={styles.card}>
    <div style={styles.container}>
        <div style={styles.container}>
      <img src={addiction} alt="Terms and Conditions" style={styles.image} />
      </div>
      <h1 style={styles.header}>Game Addiction</h1>
      
      <p style={styles.section}>
        This game may be addictive; user discretion is advised. Fantasy sports may be addictive to a certain extent; we advise avoiding playing the games continuously and taking regular breaks while you play.
      </p>
      
      <h2 style={styles.subHeader}>Tips for Responsible Gaming</h2>
      <p style={styles.section}>
        Here are some tips you can apply while playing online fantasy sports:
      </p>
      <ul style={styles.list}>
        <li>Set a time limit for gaming.</li>
        <li>Take regular breaks.</li>
        <li>Stop playing during work.</li>
        <li>Don’t chase losses.</li>
        <li>Play with a good frame of mind.</li>
      </ul>
      
      <p style={styles.section}>
        Working Since 2010
      </p>
      <p style={styles.section}>
        These points might be helpful for you while playing and might help you in not being addicted to it.
      </p>

      <h2 style={styles.subHeader}>18+ Disclaimer</h2>
      <p style={styles.section}>
        This game involves an element of financial risk and may be addictive. Please play responsibly at your own work. Geographical Restrictions Location Compliance: Our platform is not accessible from states where DFS is prohibited, including Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana.
      </p>
    </div>
</div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
  },
  card: {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
  },
  image: {
    width: '75%',  // Adjust this to fit your layout
    height: '50%', // Maintain aspect ratio
    marginBottom: '20px', // Space between the image and text
  },
  header: {
    textAlign: 'center',
    color: '#004c91',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '20px',
  },
  subHeader: {
    marginTop: '30px',
    marginBottom: '10px',
    color: '#004c91',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    marginBottom: '20px',
  }
};

export default GameAddiction;
