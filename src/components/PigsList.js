import React, { Component } from "react"

import hogs from "../porkers_data.js"
import uuid from 'uuid'
import FlipCard from "react-flipcard"
import Piggy from "./Piggy";






class PigsList extends Component{
  constructor(){
    super();
    this.state = {
      pigName:"",
      greased:false,
      specialty:"",
      "highest medal achieved": "",
      'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 0

    }
  }

  showCard = (id)=>{

    const result = this.props.hogs.find( hog => hog.name === id );
    this.setState({pigName: result.name,
    greased: result.greased,
    specialty: result.specialty,
    "highest medal achieved": result["highest medal achieved"],
    'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': result["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
  })
}







  render(){
    
    return (


      <div className='ui grid container'  >
      {this.props.hogs.map(hog => <Piggy name={hog.name} key={uuid()} showCard={this.showCard}  />)}
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
