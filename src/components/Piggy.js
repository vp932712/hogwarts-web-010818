import React, { Component } from "react"

import hogs from "../porkers_data.js"
import uuid from 'uuid'
import FlipCard from "react-flipcard"
import PigsList from "./PigsList"




class Piggy extends Component{

   render(){
    let img =  require(`../hog-imgs/${this.props.name.split(" ").join("_").toLowerCase()+'.jpg'}`)
    return (
       <div className='hog-name' id={this.props.name}  >
       <h3>{this.props.name}</h3>
       <img src={img}/>
       </div>
       )

  }



  }









export default Piggy;
