import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <a href="/" className={styles.logo}>
            <img
              src="/images/logo.png"
              alt=""
              className={styles.logoImage}
              width="32"
              height="32"
            />
            <span className="font-heading">Egelados</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
