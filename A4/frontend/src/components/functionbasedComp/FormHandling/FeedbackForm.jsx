import React, { useState } from 'react'
import FormData from './FormData';

const FeedbackForm = () => {
    const[user,setUser]=useState({
        name:'',
        designation:'',
        rating:0
    });

    const[emps,setEmps]= useState([]);

    const[isSubmitted,setSubmitted] = useState(false);

    const handleChange=(event)=>{
        setUser((prev)=>({...prev,[event.target.id]:event.target.value}));
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setEmps((prev)=>([...prev,user]));
        setSubmitted(true);
        console.log(user);
    }

  return (
    <div>        
        {
        isSubmitted?
        <FormData userData={emps} back={setSubmitted}  />
        :
        <form style={{border:'1px solid black',display:'inline-block',padding:'10px'}}>
            <label>Employee Name: </label>
            <input type='text' id='name' placeholder='Enter your name' onChange={handleChange} />
            <hr /><br />

            <label>Designation: </label>
            <input type='text' id='designation' placeholder='Enter your Designation' onChange={handleChange} />
            <hr /><br />
        
            <label>Rating: </label>
            <select name="Rating" id="rating" onChange={handleChange}>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
            </select>

            <hr /><br />
            <button type='submit' onClick={handleSubmit}>Submit</button>

        </form>
        }
    </div>
  )
}

export default FeedbackForm