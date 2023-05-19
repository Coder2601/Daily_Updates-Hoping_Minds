import React, { createContext, useState } from 'react'
export const songContext = createContext();

const YoutubeContext = (props) => {
    const[subscriptions,setSubscriptions] = useState([]);
    const[subscription1,setSubscription1] = useState(false)
    const[subscription2,setSubscription2] = useState(false)
    const[subscription3,setSubscription3] = useState(false)
    const[subscription4,setSubscription4] = useState(false)
    const[subscription5,setSubscription5] = useState(false)
    const[subscription6,setSubscription6] = useState(false)

    const handleActivate=(e)=>{
        console.log(e.target.id);
        let subId = e.target.id+1
        switch(subId){
            case 1: setSubscription1(true);
            case 2: setSubscription2(true);
            case 3: setSubscription3(true);
            case 4: setSubscription4(true);
            case 5: setSubscription5(true);
            case 6: setSubscription6(true);
        }
        
        console.log('button clicked');
    }

  return (
    <songContext.Provider value={{subscription1,subscription2,subscription3,subscription4,subscription5,subscription6, handleActivate}}>
        {props.children}
    </songContext.Provider>
  )
}

export default YoutubeContext