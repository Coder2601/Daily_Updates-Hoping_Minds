import React from 'react'

function TrialF() {
    
    function handleMouseLeave(event){
        console.log(`${event.target.id}: button clciked`);
    }

    return (
        <div>
            <button id='next' onMouseLeave={handleMouseLeave}>NEXT</button>
        </div>
    )
}

export default TrialF
