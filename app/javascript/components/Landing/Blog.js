import React, { Component } from 'react';

export default class Blog extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const blog = this.props.blog
    return (
      <div className="col-lg-4 col-md-6 col-xs-12 blog-item">
        <div className="blog-item-wrapper">
          <div className="blog-item-img">
            <a href="single-post.html">
              <img src={blog.img_url}></img>
            </a>                
          </div>
          <div className="blog-item-text"> 
            <div className="date"><i className="lni-calendar"></i>{blog.date_published}</div>
            <h3><a href="single-post.html">{blog.title}</a></h3>
            <div className="meta-tags">
              <span><a href="#"><i className="lni-eye"></i>{blog.stats.views} Views</a></span>
              <span><a href="#"><i className="lni-bubble"></i>{blog.stats.comments}</a></span>
              <span><a href="#"><i className="lni-reply"></i>{blog.stats.replies}</a></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}