import React, { Component } from 'react'

class Lifecycles extends Component {
    constructor(){
        //initializations are done in constructor method
        super();
        console.log('constructor chal peyaa...');
        this.state={
           name:'Chakshu' 
        }
    }

  render() {
    console.log('render chal peyaa...');
    return (
      <div>
        Lifecycles
        <br />
        <p>Name : {this.state.name} </p>
        <button onClick={()=>this.setState({name:'Gumnaam..!'})}>Change</button>
      </div>
    )
  }

  static getDerivedStateFromProps(){
    //checks that if state is initialized or not and returns an object or null
    console.log('getDerivedStateFromProps chal peyaa...');
    return null;
  }

  componentDidMount(){
    //once mounting is done, this method is called.
    console.log('componentDidMount chal peyaa...');
  }

  shouldComponentUpdate(nextProps, nextState){
    //checks if previous and next state/props value is same then returns false otherwise return true
    //used in Pure Components for shallow Comparison
    console.log('shouldComponentUpdate chal peya...',nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('getSnapshotBeforeUpdate chal peyaa...',prevProps, prevState);
    return null;
  }

  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate chal pya...',prevProps, prevState);
  }

}


export {Lifecycles}