import React from 'react';
import styles from './SponsorsList.module.css'; // Modular CSS import
import Navbar from './Navbar';

const SponsorsList = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      {/* Statistics Section */}
      <div className={styles.statsContainer}>
        <div className={styles.statsFlex}>
          <div className={styles.circle}></div>
          <div className={styles.statsText}>
            <div className={styles.label}>Registered Societies</div>
            <div className={styles.number}>10,354</div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.circle}></div>
          <div className={styles.statsText}>
            <div className={styles.label}>Registered Societies</div>
            <div className={styles.number}>10,354</div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.circle}></div>
          <div className={styles.statsText}>
            <div className={styles.label}>Registered Societies</div>
            <div className={styles.number}>10,354</div>
          </div>
        </div>
      </div>

      <div className={styles.line}></div>

      {/* Sponsors Section */}
      <div className={styles.sponsorsContainer}>
        <div className={styles.sponsorsHeader}>
          <div className={styles.sponsorsTitle}>ALL SPONSORS</div>
          <div className={styles.sponsorsActions}>
            <div className={styles.search}>Search</div>
            <div className={styles.sortBy}>Sort By NEW</div>
          </div>
        </div>

        <div className={styles.activeMembers}>Active Members</div>
        <div className={styles.dividerLine}></div>

        <div >
            <div className={styles.sponsorRow}>
              <div className={styles.sponsorInfo}>
                <div>Company</div>
                <div>Location</div>
                <div>Budget</div>
                <div>Domain</div>
              </div>
              <div className={styles.sponsorStatus}>Status</div>
            </div>
            <div className={styles.dividerLine}></div>
        </div>

        {/* Sponsors List */}
        {sponsorsData.map((sponsor, index) => (
          <div key={index}>
            <div className={styles.sponsorRow}>
              <div className={styles.sponsorInfo}>
                <div>{sponsor.company}</div>
                <div>{sponsor.location}</div>
                <div>{sponsor.budget}</div>
                <div>{sponsor.domain}</div>
              </div>
              <div className={styles.sponsorStatus}>Status</div>
            </div>
            <div className={styles.dividerLine}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const sponsorsData = [
  { company: 'Microsoft', location: 'US', budget: '$9000', domain: 'Sports' },
  { company: 'Yahoo', location: 'Kiribati', budget: '$1200', domain: 'Photo' },
  { company: 'Adobe', location: 'Israel', budget: '$17000', domain: 'Design' },
];

export default SponsorsList;
