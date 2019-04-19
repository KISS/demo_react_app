import React, {Component} from 'react';
import styles from './scss/app.scss';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import blogs from './blogs/blogs.js';

// components
import Header from './components/Header.js';
import Main from './components/Main.js';
import BlogList from './components/BlogList.js';
import BlogSingular from './components/BlogSingular.js';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header />

          <div className={styles.contentContainer}>
            <Route exact path='/' component={Main}/>
            <Route exact path='/blog' component={BlogList}/>
            <Route exact path='/blog/:title' component={BlogSingular}/>
            <Nav />
          </div>

          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;