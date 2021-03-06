import React, {Component} from 'react';
import blogs from '../blogs/blogs.js';

// components
import BlogPostExcerpt from './BlogPostExcerpt.js';

class Main extends Component {
  render () {
    const blogList = Object.keys(blogs).map((blog, i) => {
      return <BlogPostExcerpt key={i} url={blogs[blog].url} title={blogs[blog].title} date={blogs[blog].date} excerpt={blogs[blog].excerpt} src={blogs[blog].src} />
    })

    return (
      <main>
        <div>
          <h1>Recent Blog Posts</h1>
          <div className="row mb-2">{blogList}</div>
        </div>
      </main>
    )
  }
}

export default Main;