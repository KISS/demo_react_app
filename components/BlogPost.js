import React, {Component} from 'react';

class BlogPost extends Component {
  render () {
    return (
      <div className="col-md-12">
        <div className="card mt-4">
          <img className="card-img img-fluid" src={this.props.src} alt=''/>
          <div className="card-body">
            <h2>{this.props.title}</h2>
            <div className="mb-1 text-muted">{this.props.date}</div>
            <div className="card-text mb-auto">
              {this.props.content.map((para, i)=> (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogPost;