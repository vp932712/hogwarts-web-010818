import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import PigsList from "./PigsList.js"
import hogs from "../porkers_data.js"
import PigsContainer from "../container/PigsContainer"

class App extends Component {

state={
  listPigs: ""
}



  render() {

    return (
      <div className="App">
          < Nav />
          < PigsContainer  />
      </div>
    )
  }
}

export default App;
