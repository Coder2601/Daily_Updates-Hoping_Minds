import React, { Component } from 'react'

export class FormData extends Component {
  componentWillUnmount(){
    console.log('FormData componentWillUnmount is called...');
  }
  render() {
    let {handleBack, users} = this.props
    return (
      <div>
        <div>
                {users.map((item,index)=>{
                    return(
                        <div key={index}>
                            <h3>Name = {item.name}</h3>
                            <h3>Age = {item.age}</h3>
                            <hr/>
                        </div>
                    )
                })
                }
                <button onClick={handleBack}>Go Back</button>
                </div>
      </div>
    )
  }
}

export default FormData