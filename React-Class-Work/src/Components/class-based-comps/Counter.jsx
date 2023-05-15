import React, { Component } from 'react'

export class Counter extends Component {
    constructor(){
        super();
        console.log('constructor is called...');
        this.state={
            age:18
        }
    }
  render() {
    console.log('render is called....');
    return (
      <div>
        <h2>Counter Component : {this.state.age}</h2>
        <button onClick={()=>this.setState({age:this.state.age+1})}>Inc</button>
      </div>
    )
  }

  static getDerivedStateFromProps(){
    //confirms if the state is initialized or not
    console.log('getDerivedStateFromProps is called....');
    return null;
  }
  componentDidMount(){
    console.log('componentDidMount is called...');
  }

  shouldComponentUpdate(nP, nS){
    console.log('shouldComponentUpdate is called... ', nP, nS);
    return true;
  }

  getSnapshotBeforeUpdate(pP, pS){
    console.log('getSnapshotBeforeUpdate is called...', pP, pS);
    return null;
  }
  componentDidUpdate(x,y){
    console.log('componentDidUpdate is called...',x,y);
  }
  componentWillUnmount(){
    console.log('componentWillUnmount is called..');
  }
}

export default Counter