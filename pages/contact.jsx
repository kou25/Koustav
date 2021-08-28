import { useState } from 'react';
import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Reach Out Via Socials</h1>
        <ContactCode />
      </div>
      <div>
        <h1>/* In case of business.</h1>
        <h1>Please free to reach out anytime. </h1>
        <h1>I would love to serve you. */</h1>
        </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
