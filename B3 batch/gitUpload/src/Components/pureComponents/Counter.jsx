import React, { Component, PureComponent } from 'react'

export class Counter extends PureComponent {
    constructor(){
        super()
        this.state={
            count:10
        }
    }
  render() {
    console.log('Render is called...');
    const handleIncrease=()=>{
      console.log('button clicked...');
        this.setState({
            count:0
        })
    }
    return (
      <div>
        <h2>Counter</h2>

        <p>Count = {this.state.count}</p>
        <button onClick={handleIncrease}>CLEAR</button>

      </div>
    )
  }
}

export default Counter