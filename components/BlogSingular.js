import React, {Component} from 'react';
import data from '../blogs/blogs.js';

// components
import BlogPost from './BlogPost.js';

class BlogSingular extends Component {
  render () {
    const blogList = Object.keys(data).map((blog, i) => {
      return <BlogPost key={i} title={data[blog].title} date={data[blog].date} content={data[blog].content} src={data[blog].src} url={data[blog].url}/>
    })

    const thisRef = this;
    const blog = blogList.filter((b) => {
      return b.props.url.includes(thisRef.props.match.params.title)
    })
    const title = blog[0].props.title;

    return (
      <div>
        <h1>Reading: {title}</h1>
        <div className="row mb-2">{blog}</div>
      </div>
    )
  }
}

export default BlogSingular;