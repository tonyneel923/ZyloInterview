import React from 'react';
import { NavLink } from 'react-router-dom';

// must have extension .module.* in order for css-modules to recognize it
import styles from './PrimaryHeader.module.scss';

const PrimaryHeader = () => (
  <div>
    <div className={styles.nav}>
      <NavLink to="/" exact activeClassName={styles.active} className={styles.navItem}>Get Stock Info</NavLink>
      <NavLink to="/favorites" activeClassName={styles.active} className={styles.navItem}>Favorites</NavLink>
    </div>
  </div>
);

export default PrimaryHeader;
