import React from 'react'
import { cars } from '../../../data'
import CarDetails from './CarDetails'

const LuxuryCarShow = () => {
    const ulStyle={
        backgroundColor : 'purple',
        color:'green',
        listStyleType: 'none' ,
        display:'flex'   
    }
    const liStyle={
        border:'1px solid black',
        width:'200px',
        height:'250px',
        padding:'10px',
        marginLeft:'5px',
        backgroundColor:'cyan'
    }
  return (
    <>
    <ul style={ulStyle}>
        {cars.map((car,index)=><CarDetails liStyle={liStyle} details={car} key={index} />)}
    </ul>
    </>
  )
}

export default LuxuryCarShow