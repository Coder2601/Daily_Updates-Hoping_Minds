import React, { Component } from 'react'

export class Form extends Component {
  render() {
    return (
      <>
        <form style={{border:'2px solid green'}}>
            <label>Name</label>
            <input type='text' placeholder='name' id='nameIp'/>
            <br/>
            <label>Age</label>
            <input type='text' placeholder='age' id='ageIp'/>
            <br/>
            <button>Submit</button>
        </form>
      </>
    )
  }
}

export default Form