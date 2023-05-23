import React, { createContext, useState } from 'react'
export const songContext = createContext();

const YoutubeContext = (props) => {

    const[subscription1,setSubscription1] = useState(true)
    const[subscription2,setSubscription2] = useState(false)
    const[subscription3,setSubscription3] = useState(false)
    const[subscription4,setSubscription4] = useState(false)
    const[subscription5,setSubscription5] = useState(false)
    const[subscription6,setSubscription6] = useState(false);
    
    const[subscriptions,setSubscriptions] = useState([subscription1, subscription2,subscription3,subscription4,subscription5,subscription6]);
    
    const handleActivate=(e)=>{
        console.log(`Button id: ${e.target.id}`);
        let subId = e.target.id
        switch(subId){
            case '0': setSubscription1(!subscription1);break;
            case '1': setSubscription2(!subscription2);break;
            case '2': setSubscription3(!subscription3);break;
            case '3': setSubscription4(!subscription4);break;
            case '4': setSubscription5(!subscription5);break;
            case '5': setSubscription6(!subscription6);break;
        }

        setSubscriptions(()=>([
          subscription1,
          subscription2,
          subscription3,
          subscription4,
          subscription5,
          subscription6
        ]))
        // console.log(subscriptions);
        console.log(subscription1,subscription2,subscription3,subscription4,subscription5,subscription6);
    }

  return (
    <songContext.Provider value={{setSubscriptions, subscriptions, handleActivate}}>
        {props.children}
    </songContext.Provider>
  )
}

export default YoutubeContext