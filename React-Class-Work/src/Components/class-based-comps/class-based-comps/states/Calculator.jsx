import React, { Component } from 'react'

class Calculator extends Component {
    constructor(){
        super();
        this.state={
            inputVal:0,
            outPutVal:0
        }
    }

  render() {
    const x = {
        border:'2px solid black'
    }

    const handleDouble=()=>{
        this.setState({        
            outPutVal:this.state.inputVal*2
        })
    }
    const handleTripple=()=>{
        this.setState({        
            outPutVal:this.state.inputVal*3
        })
    }
    const handleSquare=()=>{
        this.setState({        
            outPutVal:this.state.inputVal**2
        })
    }
    const handleCube=()=>{
        this.setState({        
            outPutVal:this.state.inputVal**3
        })
    }
    const handleChange=(event)=>{
        console.log(event.target.value)
        
        this.setState({
            inputVal:event.target.value
        })
    }
    const handleClear=()=>{
        this.setState({
            inputVal:0,
            outPutVal:0
        });
        document.getElementById('ip').value = 0
    }
    return (
      <>
        <div style={x}>
            <input id='ip' type="text" placeholder='Enter value' onInput={handleChange}/>

            <br/>
            <button id='double' onClick={handleDouble}>x2</button>

            <button id='tripple' onClick={handleTripple}>x3</button>

            <button id='square' onClick={handleSquare}>^2</button>

            <button id='cube' onClick={handleCube}>^3</button>
            <br/>
            <button onClick={handleClear}>Clear</button>

            <p>Result: {this.state.outPutVal}</p>
        </div>
      </>
    )
  }
}

export default Calculator