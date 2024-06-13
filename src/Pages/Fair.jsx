import React from 'react';
import Fair from '../Assets/Fair.png';

const FairPlayViolation = () => {
  return (
    <div style={styles.card}>
    <div style={styles.container}>
    <div style={styles.container}>
      <img src={Fair} alt="Terms and Conditions" style={styles.image} />
      </div>
      <h1 style={styles.header}>Fair Play Violation</h1>
      <p style={styles.section}>
        WINNER GO Fantasy considers Fair Play to be a priority on its platform. Any user violating the Fair Play Terms of WINNER GO Fantasy will face various consequences, including the potential blocking of the user's WINNER GO Fantasy account.
      </p>

      <h2 style={styles.subHeader}>What Constitutes a Fair Play Violation at WINNER GO Fantasy?</h2>
      <ul style={styles.list}>
        <li>The people you refer should be genuine accounts. Users must not use fake accounts to gain the 'Refer & Earn' Cash Bonus.</li>
        <li>The PAN cards of all your referred friends must be verified. If more than 9 of your referred friends' PAN cards are not verified, you will be considered in violation of the Fair Play Terms of WINNER GO Fantasy.</li>
        <li>Creating more than one account on the WINNER GO Fantasy platform is a violation. WINNER GO Fantasy neither allows nor encourages users to create multiple user accounts.</li>
        <li>Withdrawing your winnings by using unlawful or illegal means is considered a Fair Play violation.</li>
        <li>Submitting fake copies or someone else’s documents during registration is a violation of the Fair Play Terms of WINNER GO Fantasy.</li>
        <li>If a user is found to be creating and using multiple accounts on a single device during regular platform audits, it will be considered a Fair Play violation. This will result in the withdrawal requests being put on hold.</li>
      </ul>

      <h2 style={styles.subHeader}>Consequences of Violating Fair Play Terms</h2>
      <p style={styles.section}>
        If a user is found to be violating the Fair Play terms of WINNER GO Fantasy, their account will be blocked. Furthermore, the total amount in the user's WINNER GO Fantasy account will be reduced to zero.
      </p>
      <p style={styles.section}>
        Users creating multiple accounts on a single device must ensure that all mandatory verification formalities, including mobile, email, PAN card, and Bank Account details, are completed for all accounts. This process will facilitate smooth withdrawals for users with multiple accounts on a single device.
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

export default FairPlayViolation;
