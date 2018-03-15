import React, { Component } from "react"

import hogs from "../porkers_data.js"
import uuid from 'uuid'
import FlipCard from "react-flipcard"




class Piggy extends Component{

   render(){
    let img =  require(`../hog-imgs/${name.split(" ").join("_").toLowerCase()+'.jpg'}`)
    return (
       <div className='hog-name' id={name} onClick={handleClickClick} >
       <h3>{name}</h3>
       <img src={img}/>
       </div>
       )

  }



  }









export default Piggy;
