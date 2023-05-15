import React from 'react'

const RowData = (props) => {
    const {imgLink, imgName, description} = props.rawDataProp;
  return (
    <>
        <tr>
            <td rowSpan={2}>
                <img src={imgLink} width='100px' height='150px' />
            </td>
            <td>
                <h2>{imgName}</h2>
            </td>
        </tr>
        <tr>
            <td>
            <p>{description}</p>
            </td>
        </tr>
    </>
  )
}

export default RowData