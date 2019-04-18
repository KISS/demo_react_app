import React, {Component} from 'react';
import styles from '../scss/app.scss';

class Nav extends Component {
  render () {
    return (
      <div className={styles.nav}>
        <h3>Main Menu</h3>
        <nav>
          <a href="#">Home</a>
          <a href="#">About Me</a>
          <a href="#">Blog</a>
        </nav>

        {/* TODO: third party api integration */}
      </div>
    )
  }
}

export default Nav;