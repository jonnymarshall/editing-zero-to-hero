import React, { Component } from 'react';
import Service from './Service'

export default class Services extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const services = [{
      id: 1,
      name: "Project Setup",
      description: "File formats, reolutions, media types, sequence settings - how to start your project the right way.",
      icon: "pencil"
    },
    {
      id: 2,
      name: "Importing, Syncing & Rough Cutting",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
      icon: "cog"
    },
    {
      id: 3,
      name: "Editing",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
      icon: "stats-up"
    },
    {
      id: 4,
      name: "Animation, Titles, Music & Effects",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
      icon: "layers"
    },
    {
      id: 5,
      name: "Finishing & Exporting",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
      icon: "tab"
    },
    {
      id: 6,
      name: "Repurposing, Reversioning & Archiving",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
      icon: "briefcase"
    },]

    return(
      <section id="services" className="section">
        <div className="container">
          <div className="section-header">          
            <h2 className="section-title">Our Services</h2>
            <span>Services</span>
            <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p>
          </div>
          <div className="row">
            {services.map((service) => <Service key={service.id} service={service} />)}
          </div>
        </div>
      </section>
    )
  }
}