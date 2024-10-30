import React from 'react';
import LandingNav from '../LandingPage/LandingNav.jsx'
import styles from './CreateAccount.module.css';

const CreateAccount = () => {
    return (
        <div className={styles.container}>
            <LandingNav />
            <div className={styles.content}>
                <div>
                    <div className={styles.title}>Create an account</div>
                    <div className={styles.subtitle}>What type of account do you want to create?</div>
                </div>
                <div className={styles.flexContainer}>
                    <div className={styles.accounts}>
                        <div className={styles.sponsor}>
                            Sponsors
                            <div className={styles.sponsorText}>
                                I want to attract sponsors and secure funding for our events.
                            </div>
                            <span>&rarr;</span>
                        </div>
                        <div className={styles.societies}>
                            Societies
                            <div className={styles.societiesText}>
                                I want to find and sponsor the right student societies to promote my brand.
                            </div>
                            <span>&rarr;</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;
