import React from 'react'
import FishRowData from './FishRowData';
import myArr from './data'

function FishTable() {
  return (
    <>
        <h2>Fishes of Future...</h2>
        <table>

        <tbody>
            {myArr.map(item => {
                return (
                    <>
                    <FishRowData fishProp={item} />
                    <hr/>
                    <br/>
                    </>
                )
            })}

        </tbody>    
        </table>
    </>
  )
}

export default FishTable