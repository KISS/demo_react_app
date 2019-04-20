import React, {Component} from 'react';
import styles from '../scss/app.scss';

class APIDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      date: '',
    }
  }
  componentDidMount() {
    let date = this.generateDate();
    this.fetchData(date);

    this.interval = setInterval(() => {
      date = this.generateDate();
      this.fetchData(date);
    }, 5000)
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  fetchData(date) {
    const url = `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia.org/all-access/${date}`;

    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json.items[0].articles.slice(0, 8),
          date: date
        })
      });
  }
  generateDate() {
    const yyyy = String(Math.floor(Math.random() * 2) + 2016);
    const mm = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')
    const dd = String(Math.floor(Math.random() * 15) + 1).padStart(2, '0')

    return `${yyyy}/${mm}/${dd}`;
  }
  render () {
    let { isLoaded, items, date } = this.state;
    const url = 'https://en.wikipedia.org/wiki/';

    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="mt-4">
          <h3>8 Top Wikipedia Articles from: {date}</h3>
          <ul className={styles.list}>
            {items.map((item, i) => (
              <li key={i} id={item.article}>
                {item.article} was viewed {item.views} times: <a href={url + item.article} target="_blank">read the article</a>
              </li>
            ))}
          </ul>
        </div>
      )
    }
  }
}

export default APIDiv;