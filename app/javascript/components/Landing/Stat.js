import React, { Component } from 'react'

export default class Stat extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const stat = this.props.stat
    return(
      <div className="col-sm-6 col-md-6 col-lg-3">
        <div className="facts-item"> 
          <div className="icon">
            <i className={"lni-" + stat.icon}></i>
          </div>                
          <div className="fact-count">
            <h3><span className="counter">{stat.figure}</span>{stat.figure_char_append}</h3>
            <h4>{stat.context}</h4>
          </div>
        </div>
      </div>
    )
  }
}