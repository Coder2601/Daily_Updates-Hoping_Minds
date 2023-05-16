import React, { Component } from 'react'


export class FishRowData extends Component {
    constructor(){
        super();
    }
  render() {
    const{id,name,image,description} = this.props.fishProp
    return (
      <>
        <tr id={id}>
            <td>
                <h2>{name}</h2>
            </td>
            <td>
                <img src={image} alt= {name} width='100px' height='100px'/>
            </td>
            <td>
            <p>{description}</p>
            </td>
        </tr>
      </>
    )
  }
}

export default FishRowData