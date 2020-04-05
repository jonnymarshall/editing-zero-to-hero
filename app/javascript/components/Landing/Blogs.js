import React, { Component } from 'react'
import Blog from './Blog'

export default class Blogs extends Component {
  render() {
    const blogs = [{
        id: 1,
        title: "10 Best Websites for Free Video Resources",
        img_url: "/assets/blog/img1-c6c9f3fc0a2c23888dfb3393be4bba5b9098fbf97766fe63e832f54372d56873.jpg",
        date_published: "10 April, 2018",
        stats: {
          views: "4.5k",
          comments: "27",
          replies: "332"
        }
      },
      {
        id: 2,
        title: "Working with Proxies: A Complete Guide",
        img_url: "/assets/blog/img1-c6c9f3fc0a2c23888dfb3393be4bba5b9098fbf97766fe63e832f54372d56873.jpg",
        date_published: "10 March, 2018",
        stats: {
          views: "3.3k",
          comments: "22",
          replies: "241"
        }
      },
      {
        id: 3,
        title: "Integrating After Effects with Adobe Premiere Pro",
        img_url: "/assets/blog/img1-c6c9f3fc0a2c23888dfb3393be4bba5b9098fbf97766fe63e832f54372d56873.jpg",
        date_published: "10 June, 2018",
        stats: {
          views: "2.8k",
          comments: "12",
          replies: "104"
        }
      },
    ]
    return (
      <section id="blog" className="section">
        <div className="container">
          <div className="section-header">          
            <h2 className="section-title">Blogs</h2>
            <span>Blogs</span>
            <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos debitis.</p>
          </div>
          <div className="row">
            {blogs.map((blog) => <Blog key={blog.id} blog={blog} />)}
          </div>
        </div>
      </section>
    )
  }
}
