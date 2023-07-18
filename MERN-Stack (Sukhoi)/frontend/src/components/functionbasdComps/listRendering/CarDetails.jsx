import React from 'react'

const CarDetails = ({details,liStyle}) => {
    const{id, name, image, price}= details
  return (
    <li style={liStyle}>
        <img width='100px' height='100px' src={image} alt={`car${id}`} />
        <h2>{name}</h2>
        <p>$ {price}</p>
    </li>
  )
}

export default CarDetails