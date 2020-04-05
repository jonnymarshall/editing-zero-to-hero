import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        {/* <!-- Footer Area Start --> */}
        <section id="copyright" className="footer-Content">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                <h3>Essence</h3>
                <div className="textwidget">
                  <p>We are a team of post production professionals dedicated to providing inudstry leading training for editors.</p>
                </div>
                <ul className="footer-social">
                  <li><a className="facebook" href="#"><i className="lni-facebook-filled"></i></a></li>
                  <li><a className="twitter" href="#"><i className="lni-twitter-filled"></i></a></li>
                  <li><a className="linkedin" href="#"><i className="lni-linkedin-fill"></i></a></li>
                </ul> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                <div className="widget">
                  <h3 className="block-title">Additional Information</h3>
                  <ul className="menu">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Guarantee Policy</a></li>
                    <li><a href="#">FAQ</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                <div className="widget">
                  <h3 className="block-title">Contact Us</h3>
                  <ul className="contact-footer">
                    <li>
                      <strong>Email :</strong> <span><a href="#">info@example.com</a></span>
                    </li>
                  </ul> 
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    )
  }
}
