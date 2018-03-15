import React, { Component } from "react"

import hogs from "../porkers_data.js"
import uuid from 'uuid'
import FlipCard from "react-flipcard"








class PigsList extends Component{
  constructor(){
    super();
    this.state = {
      // pigs: hogs
      // isFlipped: false

    }
  }

  render(){
    return (


      <div className='ui grid container'>
      {hogs.map(hog => <Hog name={hog.name} key={uuid()}  />)}
      </div>


    )

  }
}

















// const Hog = ({name}) => {
//   let img =  require(`../hog-imgs/${name.split(" ").join("_").toLowerCase()+'.jpg'}`)
//   return (
//      <div className='hog-name' id={name} onClick={handleClickClick} >
//      <h3>{name}</h3>
//      <img src={img}/>
//      </div>
//   )
// }
//
//
//
// const HogsList = ({hogs}) => (
//   <div className='ui grid container'>
//   {hogs.map(hog => <Hog name={hog.name} key={uuid()}  />)}
//   </div>
// )
//
// class PigsList extends Component{
//   constructor(){
//     super();
//     this.state = {
//       pigs: hogs,
//       isFlipped: false
//
//     }
//   }
//
//
//
//   handleClick = (e) => {
//     console.log(e);
//   }
//
//
//   // showFront(){
//   //   this.setState({
//   //     isFlipped: false
//   //   })
//   // }
//   //
//   // showBack(){
//   //   this.setState({
//   //     isFlipped: true
//   //   })
//   // }
//
//
//
//   render(){
//     return (
//       <div id="CLICKME" >
//
//       <HogsList hogs={this.state.pigs} />
//
//       </div>
//     )
//
//   }
// }

export default PigsList;
