import React, { useState } from 'react';
import styles from './Navbar.module.css'; // Import modular CSS
import Logo from '../../Assets/Logo.png'; // or .svg, .jpg, etc.
import { useNavigate } from 'react-router';


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className={styles.navbar} onClick={()=>navigate('/')}>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <img src={Logo} className={styles.logo} alt="Logo" />
        </div>
        <div className={styles.navLinks}>
          <div>For Companies</div>
          <div>For Colleges</div>
          <div>For Societies</div>
          <div>About</div>
        </div>
        <div className={styles.actions}>
          <div className={styles.getStarted} >Chats</div>
          <div className={styles.login} >Profile</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;