import React from 'react'

class Form extends React.Component{

    constructor(){
        super();
        this.state={
            nameIp:'',
            ageIp:'',
            myObj:{},
            users:[],
            isSubmitted:false
        }
    }


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
        
        const handleChange=(e)=>{
            console.log('typing...');
           
            this.setState({
                [e.target.id]:e.target.value,
            })
        }

        const handleSubmit=(e)=>{
            e.preventDefault();
            let tempObj = this.state.myObj;
            tempObj={
                name:this.state.nameIp,
                age:this.state.ageIp
            }
            console.log(tempObj);

            let tempArr = this.state.users;
            tempArr.push(tempObj);

            this.setState({
                users:tempArr,
                isSubmitted:!this.state.isSubmitted
            })
            console.log(this.state.users);
        }
        const handleBack=()=>{
            this.setState({
                isSubmitted:!this.state.isSubmitted
            })
        }

        return(
            // JSX Fragment
            <>
                <h2>Welcome to React Session</h2>

                {!this.state.isSubmitted ?
                <form style={{...myForm2,...myForm1}}>
                    <label>Name: </label>
                    <input type='text' placeholder='Enter name here' id='nameIp' onChange={handleChange}/>
                    <br/><br/>
                    <label>Age: </label>
                    <input type='text' placeholder='Enter age here' id='ageIp' onChange={handleChange}/>
                    <br/><br/>

                    <button onClick={handleSubmit}>Submit</button>
                </form>
                :
                <div>
                {this.state.users.map((item,index)=>{
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
                }




            </>
        )
    }
}
export default Form