import React, { Component } from 'react';

export default class CTA_02 extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <section id="cta" className="section" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-xs-12">            
              <div className="cta-text">
                <h5>Stil confused? Get a free 1 day trial!</h5>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12 text-right">
              <a href="#" className="btn btn-border">Start free trial</a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

