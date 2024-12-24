import React from 'react'
import Updated from './Hoc'

function Clickcounter({count,increment}) {
  return (
    <div>Clickcounter
        <button onclick={increment}>{count}</button>
    </div>
  )
}

export default Updated(Clickcounter)