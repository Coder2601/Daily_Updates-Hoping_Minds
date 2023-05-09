import React, { Component } from 'react'
import DisplayCount from './DisplayCount';

export class ControlButtons extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }
  render() {
    
    const handleIncrease=()=>{
        this.setState({
            count:this.state.count+2
        })
    }
    const handleDecrease=()=>{
        this.setState({
            count:this.state.count-2
        })
    }
    let myStyle = {
        backgroundColor:'cyan',
        color:'orange',
        border:'2px solid black',
        display:'inline',
        padding:'20px'
    }

    return (
      <div>
        
        <DisplayCount score={this.state.count} funcInc={handleIncrease} funcDec = {handleDecrease} designs={myStyle} />
        
      </div>
    )
  }
}

export default ControlButtons