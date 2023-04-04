import React from 'react'
import './styles/app.css'

const myCounter={
    display:'inline',
    border:'2px solid green',
    backgroundColor:'lightGreen',
    textAlign:'center',
    padding:'10px',
    fontSize:'25px',
    
}

const myDiv={
    border:'2px solid black',
    backgroundColor:'bisque',
    color:'black',
    padding:'15px'
}
const myDiv1={
    fontSize:'25px'
}

const myForm={
    backgroundColor:'skyblue',
    color:'purple',
    textAlign:'center'
}

class Form extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            age:'',
            experience:''
        }
    }

    render(){
        const handleInputChange=(event)=>{
            console.log(` ${event.target.id} : typing....`);
            this.setState({
                [event.target.id]:event.target.value
            })
        }
        return(
            <>
            <div style={{...myDiv,...myDiv1}}>
            <form style={myForm}>
            <h1 className='hdngF newHdng'>Form Component</h1>
            <br/>
            <label >Name :</label>
            <input type='text' placeholder='Name' id='name' onChange={handleInputChange}/>
            <br/><br/>

            <label>Age :</label>
            <input type='text' placeholder='Age' id='age' onChange={handleInputChange}/>
            <br/><br/>

            <label>Experience :</label>
            <input type='text' placeholder='Experience' id='experience' onChange={handleInputChange}/>
            <br/><br/>
            <button>Submit</button>
            </form>
            </div>
            <br/>
            <br/>
            <h2>
                name: {this.state.name} <br/>
                age: {this.state.age} <br/>
            </h2>
            </>
        )
    }
}



export default Form;