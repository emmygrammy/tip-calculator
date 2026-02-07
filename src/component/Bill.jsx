import React, { useState } from 'react'



function Bill({ bill, setBill }) {
  return (
    <div>
      <label htmlFor="bill">How much was the bill?</label>
      <input type="number" id="bill" name="bill" value={bill} onChange={(e) => setBill(e.target.value)} />

      {/* <p>You pay ${bill}</p> */}
    </div>
  )
}

export default Bill
