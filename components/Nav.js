import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from '../scss/app.scss';

class Nav extends Component {
  render () {
    return (
      <div className={styles.nav}>
        <h3>Main Menu</h3>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/blog'>Blog</Link>
        </nav>

        {/* TODO: third party api integration */}
      </div>
    )
  }
}

export default Nav;