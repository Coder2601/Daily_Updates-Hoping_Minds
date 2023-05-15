import React from 'react'

const Display = (props) => {
    const{points} = props;
  return (
    <div>
        <h2>Display Component</h2>
        <h4>Score : {points}</h4>
    </div>
  )
}

export default Display
