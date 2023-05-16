import React from 'react'
import '../styles/app.css'

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

let myForm={
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
            experience:'',
            arr:[],
            isClicked:false
        }
    }

    render(){
        let myButton = {
            backgroundColor:'grey'
        }

        if(this.state.isClicked){
                myButton.backgroundColor = 'green';
                myForm={
                    backgroundColor:'black',
                    color:'orange',
                    textAlign:'left'
                }
        }
        else{
            myButton.backgroundColor = 'red';
            myForm={
                backgroundColor:'skyblue',
                color:'purple',
                textAlign:'left'
            }
        }

        const handleInputChange=(event)=>{
            console.log(` ${event.target.id} : typing....`);
            this.setState({
                [event.target.id]:event.target.value
            })
        }

        const handleButtonSubmit=(event)=>{
            event.preventDefault();

            let tempObj = {
                name:this.state.name,
                age:this.state.age,
                experience:this.state.experience
            }
            let tempArr = this.state.arr;
            tempArr.push(tempObj);

            this.setState({
                isClicked:true,
                arr:tempArr
            })
            console.log(this.state.arr);
        }

        const handleBck=()=>{
            this.setState({
                isClicked:false
            })
        }

        return(
            this.state.isClicked ?
            <>
                Output: 
                {this.state.arr.map((item,index)=>{
                    return(
                    <div>
                        Name: {item.name} | Age: {item.age} | Experience : {item.experience}
                    </div>
                    )
                })}
                <button onClick={handleBck}>Go back</button>
            </>
            :
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
            <button style={myButton} onClick={handleButtonSubmit}>Submit</button>
            </form>
            </div>
            <br/>
            <br/>
            </>
        )
    }
}



export default Form;