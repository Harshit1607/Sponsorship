import React from 'react';
import styles from './Footer.module.css';
import { Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import Logo from '../../Assets/Logo.png'; // or .svg, .jpg, etc.

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoSection}>
        <img src={Logo} alt="" className={styles.logo} />
        <div className={styles.socialIcons}>
          <Twitter size={25} />
          <Instagram size={25} />
          <Youtube size={25} />
          <Linkedin size={25} />
        </div>
      </div>
      <div className={styles.linksSection}>
        <div className={styles.column}>
          <h3>Use cases</h3>
          <ul>
            <li>UI design</li>
            <li>UX design</li>
            <li>Wireframing</li>
            <li>Diagramming</li>
            <li>Brainstorming</li>
            <li>Online whiteboard</li>
            <li>Team collaboration</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Explore</h3>
          <ul>
            <li>Design</li>
            <li>Prototyping</li>
            <li>Development features</li>
            <li>Design systems</li>
            <li>Collaboration features</li>
            <li>Design process</li>
            <li>FigJam</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Best practices</li>
            <li>Colors</li>
            <li>Color wheel</li>
            <li>Support</li>
            <li>Developers</li>
            <li>Resource library</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;