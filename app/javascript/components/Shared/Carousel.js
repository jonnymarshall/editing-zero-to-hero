import React, { Component } from 'react';

export default class Carousel extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div id="carousel-area">
        <div id="carousel-slider" className="carousel slide carousel-fade" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carousel-slider" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-slider" data-slide-to="1"></li>
            <li data-target="#carousel-slider" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img src="/assets/slider/editing_cover_photo-1e0a968aca07f6191f4d80648361709e2eb67cd35cb8998dc251ea170b580943.png" />
              {/* <%= image_tag 'slider/bg-1.jpg' %> */}
              <div className="carousel-caption text-left">
                <h3 className="wow fadeInRight" data-wow-delay="0.2s">Adobe Premiere Pro Professional Training Series</h3>  
                <h2 className="wow fadeInRight" data-wow-delay="0.4s">Editing: Zero to Hero</h2>
                <h4 className="wow fadeInRight" data-wow-delay="0.6s">Learn to Edit Like a Pro.</h4>
                <a href="#" className="btn btn-lg btn-common btn-effect wow fadeInRight" data-wow-delay="0.9s">Start Learning</a>
                {/* <a href="#" className="btn btn-lg btn-border wow fadeInRight" data-wow-delay="1.2s">Get Started!</a> */}
              </div>
            </div>
            <div className="carousel-item">
            <img src="/assets/slider/bg-3-0d8b8f955e15df6b03c8c8c9c2a2eddf89ebcd07f821865cc2b7e292388f33c5.jpg" />
              {/* <%= image_tag 'slider/bg-3.jpg' %> */}
              <div className="carousel-caption text-center">
                <h3 className="wow fadeInDown" data-wow-delay="0.3s">Taught by Industry Pros</h3>
                <h2 className="wow bounceIn" data-wow-delay="0.6s">Industry-fit training</h2> 
                <h4 className="wow fadeInUp" data-wow-delay="0.9s">Professional grade training from start to finish.</h4>
                <a href="#" className="btn btn-lg btn-common btn-effect wow fadeInUp" data-wow-delay="1.2s">Start Learning</a>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/assets/slider/bg-2-2b65da09eb9a13b9daea9eda0f95d5259e98be439ea6cd16f24fbf69fb3fadcf.jpg" />
              {/* <%= image_tag 'slider/bg-2.jpg' %> */}
              <div className="carousel-caption text-center">
                <h3 className="wow fadeInDown" data-wow-delay="0.3s">Edit it all</h3>
                <h2 className="wow fadeInRight" data-wow-delay="0.6s">Learn to edit <i>anything.</i></h2> 
                <h4 className="wow fadeInUp" data-wow-delay="0.6s">Learn to edit movies, documentaries, music videos, commercials and more.</h4>
                <a href="#" className="btn btn-lg btn-border wow fadeInUp" data-wow-delay="0.9s">Start Learning</a>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carousel-slider" role="button" data-slide="prev">
            <span className="carousel-control" aria-hidden="true"><i className="lni-chevron-left"></i></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carousel-slider" role="button" data-slide="next">
            <span className="carousel-control" aria-hidden="true"><i className="lni-chevron-right"></i></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div> 
    )
  }
}