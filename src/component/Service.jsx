import React from 'react'


function TotalService(){
  return(
    <div>
      <Service />
      <FriendService />
    </div>
  )
}


function Service() {
  return (
    <div>
      <label htmlFor="service">How did you like the service</label>
      <select id="service" name="service">
        <option value="0.1">Dissatisfied (10%)</option>
        <option value="0.2">It was ok (5%)</option>
        <option value="0.3">It was good (10%)</option>
        <option value="0.4">Absolutely amazing! (20%)</option>
      </select>
    </div>
  )
}
function FriendService() {
  return (
    <div>
      <label htmlFor="service">How did you like the service</label>
      <select id="service" name="service">
        <option value="0.1">Dissatisfied (10%)</option>
        <option value="0.2">It was ok (5%)</option>
        <option value="0.3">It was good (10%)</option>
        <option value="0.4">Absolutely amazing! (20%)</option>
      </select>
    </div>
  )
}

export default TotalService
