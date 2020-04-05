import React, { Component } from 'react'

export default class VideoPromo extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <section className="video-promo section">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
                <div className="video-promo-content text-center">
                  <a href="https://www.youtube.com/embed/LSgBpbgTlhw" className="video-popup"><i className="lni-film-play"></i></a>
                  <h2 className="wow zoomIn" data-wow-duration="1000ms" data-wow-delay="100ms">Our Introductory Video</h2>
                  <p className="wow zoomIn" data-wow-duration="1000ms" data-wow-delay="100ms">Learn more about us, its only 30mins</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}