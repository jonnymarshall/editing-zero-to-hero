// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
// import PropTypes from 'prop-types'
import Header from '../components/Shared/Header'
import Services from '../components/Landing/Services'
import CTA_01 from '../components/Landing/CTA_01'
import Features from '../components/Landing/Features'
import VideoPromo from '../components/Landing/VideoPromo'
import Pricing from '../components/Landing/Pricing'
import Stats from '../components/Landing/Stats'
import CTA_02 from '../components/Landing/CTA_02'
import Team from '../components/Landing/Team'
import Freebies from '../components/Landing/Freebies'
import Blogs from '../components/Landing/Blogs'
import Footer from '../components/Shared/Footer'


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <React.Fragment>
      <Header />
      <Services />
      <CTA_01 />
      <Features />
      <VideoPromo />
      <Pricing />
      <Stats />
      <CTA_02 />
      <Team />
      <Freebies />
      <Blogs />
      <Footer />
    </React.Fragment>,
    document.body.appendChild(document.createElement('div')),
  )
})
