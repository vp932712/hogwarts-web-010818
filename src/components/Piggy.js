import React, { Component } from "react"

import hogs from "../porkers_data.js"
import uuid from 'uuid'
import FlipCard from "react-flipcard"
import PigsList from "./PigsList"




class Piggy extends Component{

  state = {
    showCard: ""
  }

  handleClick =(e)=>{
    this.props.showCard(e.target.id)
  }
   render(){
    let img =  require(`../hog-imgs/${this.props.name.split(" ").join("_").toLowerCase()+'.jpg'}`)
    return (
        <div id={this.props.name} className='hog-name' onClick={this.handleClick}>
          <h3 id={this.props.name}>{this.props.name}</h3>
          <img id={this.props.name} src={img}/>
        </div>
       )

  }



  }









export default Piggy;
