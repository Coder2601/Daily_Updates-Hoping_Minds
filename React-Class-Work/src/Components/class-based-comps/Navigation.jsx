import React, { Component } from 'react'

export class Navigation extends Component {
  render() {
    return (
      <>
        <ul className='List'>
            <li className='ListItem'>Home</li>
            <li className='ListItem'>About</li>
            <li className='ListItem'>Courses</li>
            <li className='ListItem'>Contact</li>
        </ul>
      </>
    )
  }
}

export class List extends React.Component{
    render(){
        return(
            <>
                <h2>I am new Component</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consequuntur non voluptate aspernatur neque amet, laborum incidunt eos error animi.</p>
            </>
        )
    }
}


export class Items extends React.Component {
  render() {
    return (
      <h2>Items</h2>
    )
  }
}

