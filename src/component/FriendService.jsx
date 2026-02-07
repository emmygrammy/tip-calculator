import React, { useState } from 'react'

function FriendService({ friendService, setFriendService }) {
  return (
    <div>
      <label htmlFor="service">How did your friend like the service?</label>
      <select id="service" name="service" value={friendService} onChange={(e) => setFriendService(Number(e.target.value))}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={0.05}>It was ok (5%)</option>
        <option value={0.1}>It was good (10%)</option>
        <option value={0.2}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  )
}
export default FriendService