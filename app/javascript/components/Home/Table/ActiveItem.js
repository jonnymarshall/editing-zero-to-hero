import React, { Component } from 'react';
import Video from './Video';
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

const ActiveItem = (props) => {
  return(
    <div className="row pt-4 pb-4">
      <div className="col-md-10 offset-md-1">
        <div className="card px-5">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <Video />
              <div className="pt-4 pb-4">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <div className="cta-wrapper">
                  <Button href="" className="cta-btn">Watch This Video</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActiveItem