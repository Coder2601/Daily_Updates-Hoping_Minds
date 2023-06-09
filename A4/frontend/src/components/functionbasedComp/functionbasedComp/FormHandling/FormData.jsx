import React from 'react'

const FormData = (propData) => {
    const{userData, back}=propData;

  return (
    <div>
        {console.log(propData)}
        <h2>FormData</h2>
        <ul>
        {userData.map((item,index)=>{
            return(
                <li key={index}>
                    Name : {item.name} ||
                    Designation: {item.designation} ||
                    Rating: {item.rating}
                </li>
            )
        })}
        </ul>
        <br />
        <button onClick={()=>back(false)}>Go Back</button>
    </div>
  )
}

export default FormData
// A2, A3