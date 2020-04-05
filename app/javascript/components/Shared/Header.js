import React, { Component } from 'react';
import Navbar from './Navbar'
import Carousel from './Carousel'

export default class Header extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <header id="slider-area">
        <Navbar />
        <Carousel />
      </header>
    )
  }
}