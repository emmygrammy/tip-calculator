import React, { useState } from 'react'



// function TotalService(){
//   return(
//     <div>
//       <Service />
//       <FriendService />
//       <BillServiceResult />
//     </div>
//   )
// }


function Service({ service, setService }) {
  return (
    <div>
      <label htmlFor="service">How did you like the service?</label>
      <select id="service" name="service" value={service} onChange={(e) => setService(Number(e.target.value))}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={0.05}>It was ok (5%)</option>
        <option value={0.1}>It was good (10%)</option>
        <option value={0.2}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  )
}


export default Service
