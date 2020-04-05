import React, { Component } from 'react'
import Stat from './Stat'

export default class Stats extends Component {
  constructor() {
    super()
  }
  render() {
    const stats = [
      {
        id: 1,
        figure: "50",
        figure_char_append: "+",
        context: "Hours of training",
        icon: "display"
      },
      {
        id: 2,
        figure: "70",
        figure_char_append: "+",
        context: "Videos",
        icon: "video"
      },
      {
        id: 3,
        figure: "9.5/10",
        figure_char_append: "",
        context: "Positive reviews",
        icon: "heart"
      },
      {
        id: 4,
        figure: "100",
        figure_char_append: "%",
        context: "Moneyback guarantee",
        icon: "emoji-smile"
      }
    ]
    return (
      <div className="counters section bg-defult">
        <div className="container">
          <div className="row"> 
            {stats.map((stat) => <Stat key={stat.id} stat={stat} />)}
          </div>
        </div>
      </div>
    )
  }
}