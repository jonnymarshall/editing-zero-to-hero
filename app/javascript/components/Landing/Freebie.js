import React, { Component } from 'react';

export default class Freebie extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const freebie = this.props.freebie
    return (
      <div className="sub-item-box">
        <div className="icon-box">
          <i className={"lni-" + freebie.icon}></i>
        </div>
        <div className="text-box">
          <h4>{freebie.title}</h4>
          <p>{freebie.description}</p>
        </div>
      </div>
    );
  }
}