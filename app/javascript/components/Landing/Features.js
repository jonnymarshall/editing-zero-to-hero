import React, { Component } from 'react';
import Feature from './Feature'

export default class Features extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const features = [{
      id: 1,
      title: "Learn from a pro",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos debitis."
    },
    {
      id: 2,
      title: "Start to finish - no gaps",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos debitis."
    },
    {
      id: 3,
      title: "Code along",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos debitis."
    },
    {
      id: 4,
      title: "Ask questions - get answers",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos debitis."
    },
    {
      id: 5,
      title: "Join the community on slack",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos debitis."
    },
    {
      id: 6,
      title: "Some other feature",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos debitis."
    }]

    return(
      <section id="features" className="section">
        <div className="container">
          <div className="section-header">          
            <h2 className="section-title">Why Choose Us</h2>
            <span>Why</span>
            <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos debitis.</p>
          </div>
          <div className="row">
            {features.map((feature) => <Feature key={feature.id} feature={feature}/>)}
          </div>
        </div>
      </section>
    )
  }
}