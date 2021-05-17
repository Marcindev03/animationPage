import Link from 'next/link';

import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/animation/drag">
            <a>Drag Animation</a>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/animation/path">
            <a>Path Animation</a>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/animation/variants">
            <a>Variants Animation</a>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/animation/tap">
            <a>Tap Animation</a>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/animation/keyframes">
            <a>Keyframes Animation</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
