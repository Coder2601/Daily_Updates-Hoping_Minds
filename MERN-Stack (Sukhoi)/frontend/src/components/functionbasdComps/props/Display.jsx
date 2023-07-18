import React from 'react'

const Display = ({ score, divStyle }) => {

  return (
    <div style={divStyle}>
      <h2>Display</h2>
      <hr />
      {score > 20 ? <p>Count : {score}</p> : <h2>Still below 20</h2>}
    </div>
  )
}

// const Display = ({ score }) => {
//   if (score > 20) {
//     return (
//       <>
//         <div>
//           <h2>Display</h2>
//           <hr />
//           <p>Count : {score}</p>
//         </div>
//       </>
//     )
//   }else{
//     return(
//       <>
//         <div>
//           <h2>Display</h2>
//           <hr />
//           <p>Count is below 20</p>
//         </div>
//       </>
//     )
//   }
// }

export default Display