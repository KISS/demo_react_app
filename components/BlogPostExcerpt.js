import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class BlogPostExcerpt extends Component {
  render () {
    return (
      <div className="col-md-12">
        <div className="card mt-4">
          <img className="card-img img-fluid" src={this.props.src} alt=''/>
          <div className="card-body">
            <h2><Link to={this.props.url}>{this.props.title}</Link></h2>
            <div className="mb-1 text-muted">{this.props.date}</div>
            <p className="card-text mb-auto">{this.props.excerpt}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogPostExcerpt;