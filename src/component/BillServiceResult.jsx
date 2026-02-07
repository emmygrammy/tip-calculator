import React, { useState } from 'react';


function BillServiceResult({ bill, service, friendService, setBill, setService, setFriendService }) {
    
    if(!bill) return null;
  const averageTipPercentage = (service + friendService) / 2;  // average tip %
  const tipAmount = Number(bill) * averageTipPercentage;       // actual tip in dollars
  const total = Number(bill) + tipAmount;

  return (
    <div>
      <p>
        You pay ${total.toFixed(0)} ($ {Number(bill).toFixed(0)} + $ {tipAmount.toFixed(0)} tip)
      </p>


      <div>
        <button onClick={() => {setBill(0); setService(0); setFriendService(0)}}>Reset</button>
      </div>
    </div>


  );
}

export default BillServiceResult;
