import React, { Component } from 'react'

export class PeopleChild extends Component {
  render() {
    return (
      <div>
        <h3>PeopleChild</h3>
        <div>
            Name: {this.props.p1.name}
            <br/>
            E-mail: {this.props.p1.email}
            <br/>
            Phone: {this.props.p1.phone}
        </div>
        <br/><br/>
        <div>
            Name: {this.props.p2.name}
            <br/>
            E-mail: {this.props.p2.email}
            <br/>
            Phone: {this.props.p2.phone}
        </div>
      </div>
    )
  }
}

export default PeopleChild