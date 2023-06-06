import React, { PureComponent } from 'react'

export class Rockstar extends PureComponent {
    constructor(){
        super();
        this.state={
            count:0,
            text:'Counter Example',
            book:{
                title:'Harry Potter',
                author:'J.K. Rowling'
            }
        }
    }
    
  render() {
    console.log('render is called..');

    const handleDec=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    const handleChange=()=>{
        this.setState({
            text:'Pure Components Example'
        })
    }

    const handleHover=()=>{
        this.setState({
            book:{
                title:'Beauty and Beast',
                author:'J.K. Rowling'
            }
        })
    }

    return (
      <div>
        <h2>Heading : {this.state.text}</h2>
        <p onMouseOver={()=>handleHover()}>Book : {this.state.book.title}  -{this.state.book.author}</p>
        <button onClick={()=>handleChange()}>Change Heading</button>
        <hr />
        <br />
        <button onClick={()=>this.setState({count:this.state.count+1})}>+</button>
        Count : {this.state.count}
        <button onClick={()=>handleDec()}>-</button>
      </div>
    )
  }
}

export default Rockstar