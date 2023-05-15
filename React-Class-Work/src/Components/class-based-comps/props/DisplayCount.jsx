import React, { Component } from 'react'

export class DisplayCount extends Component {
  render() {
    let x = this.props.designs
    return (
      <div style={x}>
        <button onClick={this.props.funcInc}>Increase</button>
        Count = {this.props.score}
        <button onClick={this.props.funcDec}>Decrease</button>
      </div>
    )
  }
}

export default DisplayCount