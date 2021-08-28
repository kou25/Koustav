import styles from '../styles/ContactCode.module.css';

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;website:{' '}
        <a href="https://koustav.vercel.app/" target="_blank" rel="noopener">
        koustav.vercel.app
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;email:{' '}
        <a
          href="mailto:koustav.manna98@gmail.com"
          target="_blank"
          rel="noopener"
        >
          koustav.manna98@gmail.com
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;github:{' '}
        <a href="https://github.com/kou25" target="_blank" rel="noopener">
          kou25
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;linkedin:{' '}
        <a
          href="https://www.linkedin.com/in/koustav-manna-14345614a/"
          target="_blank"
          rel="noopener"
        >
         koustav-manna-14345614a
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;twitter:{' '}
        <a
          href="https://twitter.com/manna_koustav"
          target="_blank"
          rel="noopener"
        >
          manna_koustav
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;instagram:{' '}
        <a
          href="https://www.instagram.com/_koo.kie_/"
          target="_blank"
          rel="noopener"
        >
          _koo.kie_
        </a>
        ;
      </p>
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
