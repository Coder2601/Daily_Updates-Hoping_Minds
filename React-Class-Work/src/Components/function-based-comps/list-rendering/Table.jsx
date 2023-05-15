import React from 'react'
import RowData from './RowData'
import rawData from './data'

const Table = () => {
  return (
    <div>
        <table>
            <tbody>
                {rawData.map((rawDataObj,index)=><RowData key={index} rawDataProp={rawDataObj} />)}
            </tbody>
        </table>
    </div>
  )
}

export default Table