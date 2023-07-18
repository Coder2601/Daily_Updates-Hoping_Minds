import React, { useState } from 'react'
import Display from './Display';
import '../../../style/multiplier.css'

const Multiplier = () => {
  const div1 = {
    display: 'inline-block',
    border: '2px solid black',
    padding: '10px'
  }
  const divColor1 = {
    backgroundColor: 'skyblue'
  }
  const divColor2 = {
    backgroundColor: 'lightgreen'
  }

  const [val, setVal] = useState(2);

  const handleUpdateVal = (mul) => {
    setVal(val * mul);
  }
  return (
    <div style={{ ...divColor1, ...div1 }}>
      <h2>Multiplier</h2>
      <hr />
      <table className='table'>
        <tbody>
          <tr>
            <th>Buttons</th>
            <th>Inputs</th>
          </tr>
          <tr>
            <td><button onClick={() => handleUpdateVal(2)}>x2</button>
</td>
<td>      <input type="number" name="" id="points" placeholder='points' onChange={(e) => setVal(e.target.value)} />
</td>
          </tr>
          <tr>
            <td><button onClick={() => handleUpdateVal(0)}>x0</button>
</td>
          </tr>
          <tr><td><button onClick={() => handleUpdateVal(8)}>x8</button>
</td></tr>
<tr><td><button onClick={() => handleUpdateVal(12)}>x12</button>
</td></tr>
        </tbody>
      </table>
      <hr />
      <Display score={val} divStyle={{ ...div1, ...divColor2 }} />
    </div>
  )
}

export default Multiplier