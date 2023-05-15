import React, { Component } from 'react'

export class Button extends Component {
    constructor(){
        super();
        this.state={
            isHidden: false
        }
    }
  render() {
    //main style object
    let myStyle={}

    //dark theme style o bject
    let dark = {
        border:'5px solid green',
        backgroundColor:'cyan',
        color:'purple'
    }

    //light theme style object
    let light = {
        border:'5px dotted orange',
        backgroundColor:'black',
        color:'cyan'
    }
    
    //conditionally applying styles
    if(this.state.isHidden){
        myStyle = dark
    }
    else{
        myStyle = light
    }

    const handleShow = ()=>{
        this.setState({
            isHidden:false
        })
    }
    const handleHide = ()=>{
        this.setState({
            isHidden:true
        })
    }
    return (
      <div style={myStyle}>
        <button onClick={handleShow}>Show Heading</button>
        <button onClick={handleHide}>Hide Heading</button>
        {this.state.isHidden ? <h2>Kindly Register Yourself..!</h2> : <h2>Welcome to the Channel</h2>}
      </div>
    )
  }
}

export default Button