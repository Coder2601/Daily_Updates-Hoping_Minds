import React, { PureComponent } from 'react'

export class Cycle extends PureComponent {
    constructor(){
        super();
        console.log('Constructor is called...');
        this.state={
            heading:'Hello World',
            books:{
              author:'JK Rowling',
              publishing:'Harry Potter'
            }
        }
    }
  render() {
    const handleChange=()=>{
        this.setState({
            heading:'LifeCycle Methods',
            books:{
              author:'JK Rowling',
              publishing:'Beauty and Beast'
            }
        })
    }
    console.log('render is called....');
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <br/>
        <button onClick={handleChange}>Change</button>
        <h3>{this.state.books.publishing} : {this.state.books.author}</h3>
      </div>
    )
  }
  // static getDerivedStateFromProps(){
  //   console.log('getDerivedStateFromProps is called...');
  //   return null;
  // }
  // componentDidMount(){
  //   console.log('componentDidMount is called...');
  // }
  
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log('shouldComponentUpdate is called...');
  //   console.log(nextProps,nextState);

  //   return true;
  // }

  // getSnapshotBeforeUpdate(prevProps,prevState){
  //   console.log('getSnapshotBeforeUpdate is called...');
  //   console.log(prevProps,prevState);
  //   return prevState;
  // }
  // componentDidUpdate(prevProps,prevState){
  //   console.log('componentDidUpdate is called...');
  //   console.log(prevProps,prevState);
  // }

}

export default Cycle