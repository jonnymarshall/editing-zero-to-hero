import React, { Component } from 'react';
import Thumbnail from './Thumbnail';
import styled from 'styled-components'

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0;
  background: #fff;
  padding: 10px 20px;
  font-size: 18px;
  width: 100%;
`

const Item = (props) => {
  return(
    <div className="row pt-4 pb-4">
      <div className="col-md-10 offset-md-1">
        <div className="card px-5">
          <div className="row">
            <div className="col-md-4">
              <Thumbnail />
            </div>
            <div className="col-md-8">
              <div className="pt-4 pb-4">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <div className="cta-wrapper">
                  <Button onClick={props.handleVideoChange} href="" className="cta-btn">Watch This Video</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item