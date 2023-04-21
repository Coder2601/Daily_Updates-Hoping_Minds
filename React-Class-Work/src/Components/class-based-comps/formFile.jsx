import React from 'react'

class Form extends React.Component{
    render(){
        let myForm1 = {
            color:'orange',
            fontSize:'25px',
            fontStyle:'bolder',
            textAlign:'left',
        }
        let myForm2={
            border:'4px solid purple', backgroundColor:'cyan', display:'inline-block', 
            padding:'9px'
        }
        return(
            // JSX Fragment
            <>
                <h2>Welcome to React Session</h2>
                <form style={{...myForm2,...myForm1}}>
                    <label>Name: </label>
                    <input type='text' placeholder='Enter name here'/>
                    <br/><br/>
                    <label>Age: </label>
                    <input type='text' placeholder='Enter age here'/>
                    <br/><br/>
                    <label>Experience: </label>
                    <input type='text' placeholder='Enter experience in years'/>
                </form>
                <div style={myForm2}>
                    <h2>Hello world</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi repellat culpa nobis perspiciatis, tenetur modi corrupti dolores soluta, impedit eaque quos illo? Repudiandae iste repellendus nihil eos ipsa minima hic.</p>
                    <hr/>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fuga?</h5>
                </div>
            </>
        )
    }
}
export default Form