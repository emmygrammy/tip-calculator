import logo from './logo.svg';
import './App.css';
import Bill from './component/Bill'
import Service from './component/Service'
import FriendService from './component/FriendService'
import BillServiceResult from './component/BillServiceResult'
import React, { useState } from 'react'





function App() {
  const [bill, setBill] = useState(0)
  const [service, setService] = useState(0)
  const [friendService, setFriendService] = useState(0)
  return (
    <div className="">
      <Bill bill={bill} setBill={setBill} />
      <Service service={service} setService={setService} />
      <FriendService friendService={friendService} setFriendService={setFriendService} />
      <BillServiceResult bill={bill} service={service} friendService={friendService}  setBill={setBill} setService={setService} setFriendService={setFriendService} />

    </div>
    
  );
}

export default App;
