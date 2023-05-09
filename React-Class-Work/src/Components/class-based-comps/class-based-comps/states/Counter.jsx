import React, { Component } from 'react'

class Counter extends Component {
  constructor(){
    console.log('constructor is called...');
    super();

    //intialize the values in state object
    this.state={
      msg:'React States in Class Based Components',
      score:0
    }
  }
    render() {   
      console.log('render is called...');

      const handleInc=()=>{
        console.log('Increase button clicked..');
        
        this.setState({
          score:this.state.score+1
        })

      }
      const handleDec=()=>{
        console.log('Decrease button clicked..');
        this.setState({
          score:this.state.score-1
        })
      }
      const handleClear=()=>{
        this.setState({
          score:'0000'
        })
      }
    
      return (
      <>
        <h1>Message : {this.state.msg} </h1>

        <button onClick={handleInc}>+</button>

        <h2 style={{display:'inline'}}> Count = {this.state.score} </h2>

        <button onClick={handleDec}>-</button>
        <br/><br/>

        <button onClick={handleClear}>Clear</button>
      </>
    )
  }
}

export default Counter