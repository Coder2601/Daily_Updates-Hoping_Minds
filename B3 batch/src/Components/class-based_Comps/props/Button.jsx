import React, { Component } from 'react'
import Count from './Count'

export class Button extends Component {
    componentWillUnmount(){
        console.log('componentWillUnmount is called...');
    }
    constructor(){
        super();
        this.state={
            count:0,
        }
    }
  render() {
    const handleInc=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    const handleDec=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    const clear=()=>{
        this.setState({
            count:0
        })
    }
    return (
      <div>
        <h2>Button Component</h2>
        <button onClick={handleDec}>Decrease</button>
        <Count value={this.state.count} clearFunc={clear} />
        <button onClick={handleInc}>Increase</button>
      </div>
    )
  }
}

export default Button