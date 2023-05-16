import React, { Component } from 'react'
import PeopleChild from './PeopleChild'

export class PeopleParent extends Component {
    constructor(){
        super()
        this.state={
            p1: {
                id: "1276",
                name: "Neil Rhodes",
                email: "rhodes@hmc.edu",
                phone: "(909) 555-1212"
            },
            p2:    {
                id: "787",
                name: "Barack Obama",
                email: "ex-prez@whitehouse.gov",
                phone: "(312) 555-1212"
            }
        }
    }
  render() {
    return (
      <div>
        <h3>People Parent</h3>
        <PeopleChild p1={this.state.p1} p2={this.state.p2} />
      </div>
    )
  }
}

export default PeopleParent