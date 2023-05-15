import React, { Component } from 'react'

export class ActualForm extends Component {
  render() {
    //destructuring of props object
    let {handleChange, handleSubmit, styles} = this.props;
    
    return (
      <div>
        <form style={styles}>
                    <label>Name: </label>
                    <input type='text' placeholder='Enter name here' id='nameIp' onChange={handleChange}/>
                    <br/><br/>
                    <label>Age: </label>
                    <input type='text' placeholder='Enter age here' id='ageIp' onChange={handleChange}/>
                    <br/><br/>

                    <button onClick={handleSubmit}>Submit</button>
                </form>
      </div>
    )
  }
  componentWillUnmount(){
    console.log('ActualForm componentWillUnmount is called....');
  }
}

export default ActualForm