import React, { Component } from 'react'

export class Heading extends Component {
  render() {
    return (
      <div>
        <h5>Heading Class</h5>
        Message: {this.props.a}
      </div>
    )
  }
}

export default Heading