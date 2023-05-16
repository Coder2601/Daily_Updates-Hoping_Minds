import React, { createContext, useState } from 'react'
import ComponentA from './ComponentA';

export const namesContext = createContext();

function MainParent(props) {
    const [fname, setfname] = useState('Divya');
    const [lname, setlname] = useState('Goyal');
    const [exp, setexp] = useState(4);


  return (
    <>
    <namesContext.Provider value={{fname, lname, exp, setexp}}>
        {props.children}
    </namesContext.Provider>
    </>
  )
}

export default MainParent