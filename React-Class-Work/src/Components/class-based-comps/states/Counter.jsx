import React, { Component } from 'react'

class Counter extends Component {
  constructor(){
    super();
    this.state={
        count:10,
        message:'Hello World',
        bio:{
            fname:'Divya',
            lname:'Goyal'
        }
    }
  }
    render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button>+</button>
        <h2 style={{display:'inline'}}>  Count = {this.state.count}  </h2>
        <button>-</button>

        <p>First Name = {this.state.bio.fname}</p>
        <p>First Name = {this.state.bio.fname}</p>

      </>
    )
  }
}

export default Counter