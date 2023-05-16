import React, { useEffect, useState } from 'react'

function CallApi() {
    let[users,setUsers] = useState([]);
    let[click,setClick] = useState(false)

    useEffect(()=>{
        console.log('useEffect called...');
        async function x(){
            let op = await fetch('https://jsonplaceholder.typicode.com/users');
            
            let result = op.json()
            result.then((data)=>{
                console.log(data);

                let tempArr= users;

                data.map((item,index)=>{
                    tempArr.push(item)
                    return null
                    
                })
                setUsers(tempArr);
            },[]);
        }
        x();
    })

    const op = users.map((item,index)=>(
        <div key={index}>
            <p key={index}>ID : {item.id}</p>
            <h4>Name: {item.name}</h4>
            <hr/>
        </div>
    ));

    return (
    <>
      <h2>Calling API </h2>  
        <button onClick={()=>setClick(true)}>Fetch API</button>
      {click?<div>Data = {op}</div>:null}
    </>
  )
}

export default CallApi