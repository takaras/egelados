import Header from './header';
import Footer from './footer';

import styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.layoutContent}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
