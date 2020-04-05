import React, { Component } from 'react'
import Product from './Product'

export default class Pricing extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const products = [{
      id: 1,
      name: "Basic Plan",
      price: 49,
      perks: ["perk1", "perk2", "perk3", "perk4"],
      featured: false
    },
    {
      id: 2,
      name: "Popular Plan",
      price: 99,
      perks: ["perk1", "perk2", "perk3", "perk4"],
      featured: true
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 199,
      perks: ["perk1", "perk2", "perk3", "perk4"],
      featured: false
    }]
    return (
      <div id="pricing" className="section pricing-section">
        <div className="container">
          <div className="section-header">          
            <h2 className="section-title">Pricing Plans</h2>
            <span>Pricing</span>
            <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos debitis.</p>
          </div>

          <div className="row pricing-tables">
            {products.map((product) => <Product key={product.id} product={product} />)}
          </div>
        </div>
      </div>
    )
  }
}