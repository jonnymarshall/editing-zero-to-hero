import React, { Component } from 'react';

export default class TeamMember extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const member = this.props.member
    return (
      <div className="col-lg-3 col-md-6 col-xs-12">
        <div className="single-team">
          <img src="/assets/team/team1-43df950022b90f966bbf3dde7b598bd210cefa7c3cec4685f474f5b54275f1ca.png"></img>
          <div className="team-details">
            <div className="team-inner">
              <h4 className="team-title">{member.name}</h4>
              <p>Chief Technical Officer</p>
              <ul className="social-list">
                <li className="facebook"><a href="#"><i className="lni-facebook-filled"></i></a></li>
                <li className="twitter"><a href="#"><i className="lni-twitter-filled"></i></a></li>
                <li className="google-plus"><a href="#"><i className="lni-google-plus"></i></a></li>
                <li className="linkedin"><a href="#"><i className="lni-linkedin-fill"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}