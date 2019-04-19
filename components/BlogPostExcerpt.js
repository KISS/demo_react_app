import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class BlogPostExcerpt extends Component {
  render () {
    return (
      <div>
        <h2><Link to={this.props.url}>{this.props.title}</Link></h2>
        <span>{this.props.date}</span>
        <img src={this.props.src}/>
        <div>{this.props.excerpt}</div>
      </div>
    )
  }
}

export default BlogPostExcerpt;