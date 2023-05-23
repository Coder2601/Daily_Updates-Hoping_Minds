import React from 'react'
import playlists from './list'
import PlayListRow from './PlayListRow'
import './Playlist.css'
import YoutubeContext from './YoutubeContext'

const Playlist = () => {
  return (
    <YoutubeContext>
        <table>
            <tbody>
                <tr>
                    <th>S. No</th>
                    <th>Playlists</th>
                    <th>Subscription</th>
                </tr>
                {playlists.map((item,index)=>{
                    return(
                        <PlayListRow key={index} id={index} listItems={item} />
                    )
                })}
            </tbody>
            
        </table>
    </YoutubeContext>
  )
}

export default Playlist