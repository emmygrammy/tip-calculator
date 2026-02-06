import React, { useState } from 'react'



function Bill() {
  const [bill, setBill] = useState(0)

  return (
    <div>
      <label htmlFor="bill">How much was the bill</label>
      <input type="number" id="bill" name="bill" value={bill} onChange={(e) => setBill(e.target.value)} />
    </div>
  )
}

export default Bill
