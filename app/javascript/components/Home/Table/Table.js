import React, { Component } from 'react';
import Item from './Item'
import ActiveItem from './ActiveItem'

class Table extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const items = this.props.course_modules.map ((data) => {
      let handleVideoChange= this.props.handleVideoChange.bind(this, data)
      if (data.active == true) {
        return <ActiveItem handleVideoChange={handleVideoChange} key={data.id} title={data.title} description={data.description} />
      } else {
        return <Item handleVideoChange={handleVideoChange} key={data.id} title={data.title} description={data.description} />
      }
    })

    return(
      <div className="pt5 pb-5">
        <div className="container">
          <div className="text-center">
            <h2 className="pt-4 pb-4">Table of Contents</h2>
          </div>
          {items}
        </div>
      </div>
    )
  }
}

export default Table