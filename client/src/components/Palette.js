import { useState } from 'react'

import { send } from '../socketApi'

function Palette({ activeColor }) {
  const [color, setColor] = useState('')
  return (
    <div className="palette">
      <input
        type="color"
        value={activeColor}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={() => send(color)}>Save</button>
    </div>
  )
}

export default Palette
