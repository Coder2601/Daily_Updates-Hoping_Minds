import React, { Component } from 'react'
import './Chairs.css'

export class Chairs extends Component {
    constructor(){
        super();
        this.state = {
            status:'?',
            bgColor:'bisque',
            isClicked:false
        }
    }
  render() {
    
    const handleNoClick=(event)=>{
        console.log(event);
        this.setState({
            status:'Engaged!',
            bgColor:'red'
        })
    }

    const handleYesClick=()=>{
        this.setState({
            status:'Cool! You found it!',
            isClicked:true,
            bgColor:'green'
        })
    }

    let myContainer={
        backgroundColor:this.state.bgColor,
        height:'50px'
    }

    return (
      <>
        <div style={myContainer}>      
            <div className='chairs' onClick={handleNoClick}>
                Chair 1 
            </div>
            <div className='chairs' onClick={handleNoClick}>
                Chair 2
            </div>
            <div className='chairs' onClick={handleYesClick}>
                Chair 3
            </div>
            <div className='chairs' onClick={handleNoClick}>
                Chair 4
            </div>
        </div>

        <p>Status : {this.state.status}</p>
      </>
    )
  }
}

export default Chairs