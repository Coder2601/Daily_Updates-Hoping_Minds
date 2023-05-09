import React, { useState } from 'react'

const Counter = () => {
    
    let[count, setCount] = useState(25);
    const[message,setMessage] = useState('Hello World')
    const[books,setBooks] = useState([]);
    const[currentBook,setCurrentBook] = useState('')

    const handleInc=()=>{
        setCount(count+1);
    }
    const handleDec=()=>{
        setCount(count-1);
    }
    const handleChange=()=>{
        setMessage('Topic : UseState Hook in react')
    }
    const handleBooks=(e)=>{
        setCurrentBook(e.target.value);
    }
    const handleList=()=>{
        let val = document.getElementById('bookVal').value;
        setCurrentBook(val);
        setBooks(books=>([
            ...books,
            currentBook
        ]))
        console.log(books);
    }

  return (
    <div>
        <h2 onDoubleClick={handleChange}>{message}</h2>
        <button onClick={handleInc}>Increase</button>
        <p>Count : {count} </p>
        <button onClick={handleDec}>Decrease</button>
        <br/>
        <br/>
        <br/>

        <input id='bookVal' type="text" placeholder='Book name' onChange={handleBooks}/>
        <button onClick={handleList}>Add to list</button>
    </div>
  )
}

export default Counter