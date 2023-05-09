import React, { Component } from 'react'
import ActualForm from './ActualForm';
import FormData from './FormData';


export class ParentForm extends Component {
    constructor(){
        console.log('constructor is called...');
        super();
        this.state={
            nameIp:'',
            ageIp:'',
            myObj:{},
            users:[],
            isSubmitted:false
        }
    }

    render() {
        console.log('render is called...');
    let myForm1 = {
        color:'orange',
        fontSize:'25px',
        fontStyle:'bolder',
        textAlign:'left',
    }
    let myForm2={
        border:'4px solid purple', backgroundColor:'cyan', display:'inline-block', 
        padding:'9px'
    }
    
    const handleChange=(e)=>{
        console.log('typing...');
       
        this.setState({
            [e.target.id]:e.target.value,
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        let tempObj = this.state.myObj;
        tempObj={
            name:this.state.nameIp,
            age:this.state.ageIp
        }
        console.log(tempObj);

        let tempArr = this.state.users;
        tempArr.push(tempObj);

        this.setState({
            users:tempArr,
            isSubmitted:!this.state.isSubmitted
        })
        console.log(this.state.users);
    }
    const handleBack=()=>{
        this.setState({
            isSubmitted:!this.state.isSubmitted
        })
    }

    return (
      <div>
        {
        !this.state.isSubmitted?
        <ActualForm handleChange={handleChange} handleSubmit={handleSubmit} styles={{...myForm1, ...myForm2}} />
        :
        <FormData users={this.state.users} handleBack={handleBack}/>
        }

      </div>
      
    )
  }
  static getDerivedStateFromProps(){
    console.log('getDerivedStateFromProps is called...');
    return null;
  }
  componentDidMount(){
    console.log('componentDidMount is called...');
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('shouldComponentUpdate is called...');
    // console.log(nextProps,nextState);

    return true;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('getSnapshotBeforeUpdate is called...');
    // console.log(prevProps,prevState);
    return prevState;
  }
  componentDidUpdate(prevProps,prevState){
    console.log('componentDidUpdate is called...');
    // console.log(prevProps,prevState);
  }
}

export default ParentForm