import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <p>
        W projekcie została użyta biblioteka{' '}
        <a
          className={styles.link}
          href="https://www.framer.com/motion/"
          target="_blank"
          rel="noopener noreferrer"
        >
          FramerMotion
        </a>
      </p>
    </footer>
  );
};

export default Footer;
