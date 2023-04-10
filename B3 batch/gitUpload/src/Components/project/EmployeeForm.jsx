import React, { Component } from 'react'

const myDiv={
  border:'2px solid black',
  backgroundColor:'bisque',
  color:'black',
  padding:'15px',
  fontSize:'25px'
}

let myForm={
  backgroundColor:'skyblue',
  color:'purple',
  textAlign:'center'
}

export class EmployeeForm extends Component {
  constructor(){
    super();
    this.state={
      isClicked:false,
      data:[],
      name:'',
      department:'',
      rating:''
    }
  }

  render() {
    const handleSubmit=(event)=>{
      event.preventDefault();
      let tempObj = {
        name:this.state.name,
        department:this.state.department,
        rating:this.state.rating
      }

      let tempArr = this.state.data;
      tempArr.push(tempObj);

      this.setState({
        isClicked:!this.state.isClicked,
        data:tempArr
      })
    }

    const handleInputChange=(e)=>{
      this.setState({
        [e.target.id]:e.target.value
      })
    }

    const handleBack=()=>{
      this.setState({
        isClicked:!this.state.isClicked
      })
    }

    return (
      <>
      {!this.state.isClicked ? 
      <>
        <h1>Employee Feedback Form</h1>
        <div style={myDiv}>
          <form style={myForm}>
          <label>Name : </label>
          <input id='name' placeholder='Name' onChange={handleInputChange}/>
          <br/><br/>
          
          <label>Department : </label>
          <input id='department' placeholder='Department' onChange={handleInputChange}/>
          <br/><br/>
          
          <label>Rating : </label>
          <input id='rating' placeholder='Rating' onChange={handleInputChange}/>

          <br/><br/>
          <br/>
          <button onClick={handleSubmit}>Submit</button>
          
          </form>
        </div>
        <br/><br/>
      </>
      :
      <>
        <h1>Employee Feedback Data</h1>
        <div id='outputs'>
            <div id='results'>
              {this.state.data.map((item,index)=>{
                return(
                    <h2 key={index}>
                      Name: {item.name} | Department : {item.department} | Rating : {item.rating}
                    </h2>
                )
              })}
            </div>
        </div>
        <button onClick={handleBack}>Go Back</button>
      </>
      }
        
      </>
    )
  }
}

export default EmployeeForm
