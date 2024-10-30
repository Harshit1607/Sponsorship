import React, { useState } from 'react';
import styles from './LandingPage.module.css'; // Modular CSS import
import LandingNav from './LandingNav.jsx';
import bgImg from '../../Assets/landingBG.png'
import bgImg2 from '../../Assets/shoppingcartphone.png'
import bgImg3 from '../../Assets/growth.png'
import Footer from './Footer.jsx';
import LoginSelection from './LoginSelection.jsx';
import { useNavigate } from 'react-router';
const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <LandingNav hover={hover} setHover={setHover}/>
      <div className={styles.heroSection}>
        <img src={bgImg} className={styles.heroImg} />
        <div className={styles.heroText}>
          <span>Where <span>Societies</span></span>
          <span>Meet <span>Sponsors</span></span>
        </div>
        <div className={styles.midText}>Connect student societies with corporate sponsors effortlessly. Discover opportunities, expand your reach, and build impactful partnerships to achieve your goals.</div>
        <div className={styles.buttonContainer}>
          <button onClick={()=>navigate('/Create')}>Sign up</button>
          <button>Login &rarr;</button>
        </div>
        </div>
        <div className={styles.container2}>
        <img src={bgImg2} className={styles.Img2} />
        <span className={styles.title2}>Reach the Right College Audiences</span>
        <span className={styles.description2}>
        Find and sponsor the best-fit student societies.
        <br></br>
        Target societies based on event type, audience, and goals.
        <br></br>
        Simplify negotiations, finalize deals, and track performance
        <br></br>
        everything from <span className={styles.highlight2}>—all in one platform.</span>.
        </span>
        <button className={styles.button2}>Get Started</button>
      </div>
      
      <div className={styles.container}>
      <img src={bgImg3} className={styles.Img3} />
        <span className={styles.title}>Unlock Sponsorships for Your Society</span>
        <span className={styles.description}>
        Connect with the right sponsors effortlessly.
        <br></br>
        Showcase your events, attract top brands, and
        <br></br>
        secure sponsorships that match your society's goals. Manage
        <br></br>
        everything from <span className={styles.highlight}>PROPOSALS TO CONTRACTS IN ONE PLACE</span>.
        </span>
        <button className={styles.button}>Get Started</button>
      </div>
      <Footer />
      <LoginSelection hover={hover} setHover={setHover}/>
    </>
    
  );
};

export default HeroSection;
