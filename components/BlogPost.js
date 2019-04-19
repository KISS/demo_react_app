import React, {Component} from 'react';

class BlogPost extends Component {
  render () {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <span>{this.props.date}</span>
        <img src={this.props.src}/>
        <div>{this.props.content}</div>
      </div>
    )
  }
}

export default BlogPost;