import React, { Component, PureComponent } from 'react'

export class Counter extends Component {
  
  constructor(){
    console.log('constructor method called...');
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

  componentDidMount(){
    console.log('componentDidMount is called...');
  }

  static getDerivedStateFromProps(){
    console.log('getDerivedStateFromProps is called...');
    return null;
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('shouldComponentUpdate is called..');
    console.log(nextState.count);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('getSnapshotBeforeUpdate is called....');
    console.log(prevState.count);
    return null;
  }

  componentDidUpdate(prevProps,prevState){
    console.log('componentDidUpdate is called....');
    console.log(prevState.count);
  }
}

export default Counter