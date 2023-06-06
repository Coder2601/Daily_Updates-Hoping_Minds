import React, { Component } from 'react'

export class Form extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            designation:'',
            rating:'',
            users:[]
        }
    }


  render() {
    
    const handleNameChange=(event)=>{
        // console.log(event.target.value);
        this.setState({
            name:event.target.value
        })
    }
    const handleDesignationChange=(event)=>{
        this.setState({
            designation:event.target.value
        })
    }
    const handleRatingChange=(event)=>{
        this.setState({
            rating:event.target.value
        })
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        let tempObj = {
            name:this.state.name,
            designation:this.state.designation,
            rating:this.state.rating
        }
        let tempArr = this.state.users;

        tempArr.push(tempObj);
        
        this.setState({
            users:tempArr
        })

        console.log(this.state);
    }

    return (
      <div>
        <form style={{border:'1px solid black',display:'inline-block',padding:'10px'}}>
            <label>Employee Name: </label>
            <input type='text' placeholder='Enter your name' onChange={handleNameChange} />
            <br /><br />

            <label>Designation: </label>
            <input type='text' placeholder='Enter your Designation' onChange={handleDesignationChange} />
            <br /><br />
        
            <label>Rating: </label>
            <input type='text' placeholder='Enter rating value' onChange={handleRatingChange} />
            <br /><br />
            <button type='submit' onClick={handleSubmit}>Submit</button>

        </form>

        <br /><br />
        <div>
            <h2>Form Data: </h2>
            {this.state.users.map((item,index)=>{
                return(
                    <div key={index}>
                        <p>Name : {item.name} || Designation: {item.designation} || Rating: {item.rating}</p>
                        <hr/>
                    </div>
                )
            })}
        </div>
      </div>
    )
  }
}

export default Form