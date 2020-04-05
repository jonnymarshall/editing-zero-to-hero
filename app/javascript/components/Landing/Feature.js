import React, { Component } from 'react';

export default class Feature extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
        <div className="col-lg-4 col-md-6 col-xs-12">
          <div className="featured-box">
            <div className="featured-icon">
              <i className="lni-layout"></i>
            </div>
            <div className="featured-content">
              <div className="icon-o"><i className="lni-layout"></i></div>
              <h4>Refreshing Design</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua.</p>
            </div>
          </div>
        </div>
    )
  }
}