import React, {Component} from 'react';
import data from '../blogs/blogs.js';

// components
import BlogPost from './BlogPost.js';

class BlogList extends Component {
  render () {
    const blogList = Object.keys(data).map((blog, i) => {
      return <div key={i}><BlogPost title={data[blog].title} date={data[blog].date} content={data[blog].content} src={data[blog].src}/></div>
    })

    return (
      <div>
        <h1>All Blog Posts</h1>
        <div className="row mb-2">{blogList}</div>
      </div>
    )
  }
}

export default BlogList;