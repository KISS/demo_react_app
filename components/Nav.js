import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from '../scss/app.scss';

// components
import APIDiv from './APIDiv.js';

class Nav extends Component {
  render () {
    return (
      <div className={styles.nav}>
        <h3>Main Menu</h3>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/blog'>Blog</Link>
        </nav>

        <APIDiv />
      </div>
    )
  }
}

export default Nav;