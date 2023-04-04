import React from 'react'

const myCounter={
  display:'inline',
  border:'2px solid green',
  backgroundColor:'lightGreen',
  textAlign:'center',
  padding:'10px',
  fontSize:'25px',
  
}

class Counter extends React.Component{
  
  constructor(){
    super();
    this.state={
        count:30,
        message:'Hi user'
    }
}

  render(){
    const handleMinusChange=(event)=>{
      console.log(` ${event.target.id} clicked`);
      this.setState({
        count: this.state.count-1
      })
    }

    const handleChangeMsg=()=>{
      this.setState({
        message:'Welcome to React Session'
      })
    }
    return(
      <>
        <h1> Event Handling and State Implementation</h1>
        <h3>Message : {this.state.message}</h3>

        <div style={myCounter}>

          <button id='plusButton'>+</button>

          <p style={{display:'inline'}}>Count : {this.state.count}</p>

          <button id='minusButton' onClick={handleMinusChange}>-</button>
        </div>
        <br/>
        <br/>
        <button onClick={handleChangeMsg}>Change</button>
      </>
        )
  }

}

export default Counter