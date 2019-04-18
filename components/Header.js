import React, {Component} from 'react';
import styles from '../scss/app.scss';

class Header extends Component {
  render () {
    return (
      <header>
        <div className={styles.siteHeading}>Demo React App</div>
      </header>
    )
  }
}

export default Header;