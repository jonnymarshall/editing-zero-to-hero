import React, { Component } from 'react';
import TeamMember from './TeamMember'

export default class Team extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const teamMembers = [{
      id: 1,
      name: "John Doe",
      title: "Chief Technical Officer",
      img_url: "/assets/team/team1-43df950022b90f966bbf3dde7b598bd210cefa7c3cec4685f474f5b54275f1ca.png",
      social_links: [{
        facebook: "",
        twitter: "",
        linkedIn: ""
      }]
    },
    {
      id: 2,
      name: "Jane Doe",
      title: "Senior Editor",
      img_url: "/assets/team/team1-43df950022b90f966bbf3dde7b598bd210cefa7c3cec4685f474f5b54275f1ca.png",
      social_links: [{
        facebook: "",
        twitter: "",
        linkedIn: ""
      }]
    },
    {
      id: 3,
      name: "Bob Proctor",
      title: "Post Production Supervisor",
      img_url: "/assets/team/team1-43df950022b90f966bbf3dde7b598bd210cefa7c3cec4685f474f5b54275f1ca.png",
      social_links: [{
        facebook: "",
        twitter: "",
        linkedIn: ""
      }]
    },
    {
      id: 4,
      name: "Alice West",
      title: "Head of Motion",
      img_url: "/assets/team/team1-43df950022b90f966bbf3dde7b598bd210cefa7c3cec4685f474f5b54275f1ca.png",
      social_links: [{
        facebook: "",
        twitter: "",
        linkedIn: ""
      }]
    }]
    return(
      <section id="team" className="section">
        <div className="container">
          <div className="section-header">          
            <h2 className="section-title">Our Team</h2>
            <span>Team</span>
            <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos debitis.</p>
          </div>
          <div className="row">
            {teamMembers.map((member) => <TeamMember key={member.id} member={member} />)}
          </div>
        </div>
      </section>
    )
  }
}