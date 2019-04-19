import React, {Component} from 'react';
import data from '../blogs/blogs.js';

// components
import BlogPost from './BlogPost.js';

class BlogList extends Component {
  render () {
    const blogList = Object.keys(data).map((blog, i) => {
      return <BlogPost key={i} title={data[blog].title} date={data[blog].date} content={data[blog].content} src={data[blog].src}/>
    })

    return (
      <div>
        <h1>All Blog Posts</h1>
        {blogList}
      </div>
    )
  }
}

export default BlogList;