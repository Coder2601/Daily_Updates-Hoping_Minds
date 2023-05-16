import React, { Component } from 'react'
import '../../styles/app.css'

export class Count extends Component {
  render() {
    return (
      <div style={{border:'2px solid black'}}>
        <p>Count = {this.props.value}</p>
        <button onClick={this.props.clearFunc}>CLEAR</button>
        <br/><br/>
      </div>
    )
  }
}

export default Count