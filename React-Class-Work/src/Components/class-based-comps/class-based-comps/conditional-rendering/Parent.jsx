import React, { Component } from 'react'
import Button from './Button';

export class Parent extends Component {
    constructor(){
        super();
        this.state={
            age:100
        }
    }
  render() {
    if(this.state.age>=18){
        return(
            <Child1 />
        )
    }
    else{
        return(
            <Child2 />
        )
    }
  }
}



export class Child1 extends Component {
  render() {
    return (
        <>
        <h2>Eligible</h2>
        <Button />
        </>
    )
  }
}

export class Child2 extends Component {
    render() {
      return (
          <>
          <h2>Not Eligible</h2>
          </>
      )
    }
  }

export default Parent