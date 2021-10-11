import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <a href={process.env.PUBLIC_URL} className={styles.logo}>
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
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
