import React, { Component } from 'react';

export default class Product extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const product = this.props.product
    const featuredStyling = this.props.product.featured ? "pricing-big" : ""
    return(
      <div className="col-lg-4 col-md-4 col-xs-12">
        <div className={"pricing-table " + featuredStyling}>
          <div className="pricing-details">
            <h2>Starter Plan</h2>
            <div className="price">{product.price}<span>/mo</span></div>
            <ul>
              {product.perks.map((perk, key) => <li key={key}>{perk}</li>)}
            </ul>
          </div>
          <div className="plan-button">
            <a href="#" className="btn btn-common btn-effect">Get Plan</a>
          </div>
        </div>
      </div>
    )
  }
}