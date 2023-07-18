import React, { useState } from 'react'
import FormData from './FormData';

const FeedbackForm = () => {
    const[userDetail, setuserDetail] = useState({
        name:'',
        designation:'',
        rating:''
    });

    const[users,setUsers] = useState([]);
    const[isSubmitted,setSubmitted] = useState(false);

    const handleChange=(e)=>{
        setuserDetail((prev)=>({...prev,[e.target.id]:e.target.value}))
    }

    const handleSubmit=(e)=>{
        //synchronously
        e.preventDefault();

        setUsers([...users,userDetail]);
        setSubmitted(true)
    }

  return (
    <div>
        {!isSubmitted?
        <>
        <h2>FeedbackForm</h2>
        <form className='feedbackForm'>
            <label>Name</label>
            <input type="text" placeholder='name' id='name' onChange={handleChange} />

            <br /> <br />
            <label>Designation</label>
            <input type="text" placeholder='designation' id="designation" onChange={handleChange} />

            <br /><br />
            <label>Rating</label>
            <input type="text" placeholder='rating' id='rating' onChange={handleChange} />

            <br /><br />
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>
        <br />
        </>
        :
        <FormData users={users} setSubmitted={setSubmitted} />}
        
    </div>
  )
}

export default FeedbackForm