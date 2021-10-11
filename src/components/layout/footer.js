import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={`${styles.footerCopy} container`}>
        <p className={styles.creator}>
          Made by Dimi -{' '}
          <a
            href="https://github.com/takaras/egelados"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project code (Github)
          </a>
        </p>
        <p className={styles.attribution}>
          Icons made by{' '}
          <a
            href="https://www.freepik.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Freepik
          </a>{' '}
          from{' '}
          <a
            href="https://www.flaticon.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.flaticon.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
