import React, { Component } from "react"

import hogs from "../porkers_data.js"
import uuid from 'uuid'
import PigsList from "../PigsList"
import FlipCard from "react-flipcard"

class PigsContainer extends Component{
  constructor(){
    super();
    this.state = {
       pigsList: hogs
    }
  }


  render(){
    return (
      <div className='ui grid container'>
      <PigsList hogs={this.state.pigsList} />
      </div>
    )
  }
}







export default PigsList;
