import React, { Component } from 'react';

export default class Service extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const service = this.props.service
    return(
      <div className="col-lg-4 col-md-6 col-xs-12">
        <div className="item-boxes services-item wow fadeInDown" data-wow-delay="0.2s">
          <div className="icon color-1">
            <i className={"lni-" + service.icon}></i>
          </div>
          <h4>{service.name}</h4>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
        </div>
      </div>
    )
  }
}