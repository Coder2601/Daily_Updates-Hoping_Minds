import React, { Component } from 'react'

export class Counter extends Component {
    constructor(){
        super();
        this.state={
            count:0,
            isEligible:false,
            status:'Not Defined'
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

    return (
      <>

        <button onClick={handleInc}>Increase</button>
        <h4>Count: {this.state.count}</h4>
        <button onClick={handleDec}>Decrease</button>

        {this.state.count>18 ? 
        <p>Your status : Eligible</p>
        :
        <p>Your status : Not Eligible</p>
        }
        
      </>
    )
  }
}

export default Counter