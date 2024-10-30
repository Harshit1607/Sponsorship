import React from 'react';
import styles from './LoginSelection.module.css';
import { useNavigate } from 'react-router';

const LoginSelection = ({ hover, setHover }) => {
  const navigate = useNavigate();
  return (
    hover ? <div className={styles.container} onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}>
      <h1 className={styles.title}>Log in</h1>
      <span className={styles.subtitle}>"I want to sign in as a ..."</span>
      
      <div className={styles.buttonContainer}>
        <button className={`${styles.button} ${styles.SocietyButton}`} onClick={()=>navigate('/home')}>
          <span className={styles.buttonText}>Society</span>
          <span className={styles.arrowIcon}>→</span>
        </button>
        
        <button className={`${styles.button} ${styles.SponsorButton}`}>
          <span className={styles.buttonText}>Sponsor</span>
          <span className={styles.arrowIcon}>→</span>
        </button>

        <button className={`${styles.button} ${styles.CollegeButton}`}>
          <span className={styles.buttonText}>College</span>
          <span className={styles.arrowIcon}>→</span>
        </button>
      </div>
    </div> : null
  );
};

export default LoginSelection;