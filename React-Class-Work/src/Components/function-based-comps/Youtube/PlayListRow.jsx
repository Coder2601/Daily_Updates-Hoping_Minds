import React, { useContext, useEffect, useState } from 'react'
import './Playlist.css'
import { songContext } from './YoutubeContext'

const PlayListRow = ({listItems,btnid}) => {
    const {handleActivate,subscription} = useContext(songContext);
    const[btnVal,setBtnVal] = useState(false);

    useEffect(()=>{
        setBtnVal(subscription);
    })
  return (
    <>

        <tr>
            <td>{listItems.id}</td>
            <td>{listItems.genre}</td>
            <td>{btnVal?
                <button style={{backgroundColor:'green', color:'yellow', fontWeight:'bolder'}} >
                Already Subscribed
                </button>
                :
                <button id={btnid} style={{backgroundColor:'red', color:'white', fontWeight:'bolder'}} onClick={handleActivate}>
                Activate
                </button>}
            </td>
        </tr>
    </>
  )
}

export default PlayListRow