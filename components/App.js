import React, {Component} from 'react';
import styles from '../scss/app.scss';

// components
import Header from './Header.js';
import Main from './Main.js';
import Nav from './Nav.js';
import Footer from './Footer.js';

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <div className={styles.contentContainer}>
          <Main />
          <Nav />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;