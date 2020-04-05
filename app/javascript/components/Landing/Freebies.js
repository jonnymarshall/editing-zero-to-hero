import React, { Component } from 'react'
import Freebie from './Freebie'

export default class Freebies extends Component {
  render() {
    const freebies = [{
      id: 1,
      title: "Free Shit",
      icon: "bullhorn",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, laborum libero beatae obcaecati."
    },
    {
      id: 2,
      title: "More Free Shit",
      icon: "book",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, laborum libero beatae obcaecati."
    },
    {
      id: 3,
      title: "Even more Free Shit",
      icon: "timer",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, laborum libero beatae obcaecati."
    },
  ]
    return (
      <div id="subscribe" className="section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 col-md-12 col-xs-12">
              <div className="subscribe-form">
                <div className="form-wrapper">
                  <div className="sub-title text-center">
                    <h3>Subscribe to Newsletter</h3>
                    <p>Weekly Freebies and More!</p>
                  </div>
                  <form>
                    <div className="row">
                      <div className="col-12 form-line">
                        <div className="form-group">
                          <input type="text" className="form-control" name="email" placeholder="Name"></input>
                        </div>
                      </div>
                      {/* <div className="col-md-12 form-line">
                        <div className="form-group">
                          <input type="text" className="form-control" name="phone" placeholder="Phone"></input>
                        </div>
                      </div> */}
                      <div className="col-12 form-line">
                        <div className="form-group">
                          <input type="email" className="form-control" name="email" placeholder="Email"></input>
                        </div> 
                      </div>
                      <div className="col-12">
                        <div className="form-submit">
                          <button type="submit" className="btn btn-common btn-effect">Subscribe Now</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-xs-12">
              {freebies.map((freebie) => <Freebie key={freebie.id} freebie={freebie}/>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}