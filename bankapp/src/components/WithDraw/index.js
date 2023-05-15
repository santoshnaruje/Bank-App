import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WithdrawForm = () => {
  const [amount, setAmount] = useState('');
  const [accountNumber,setAccountNumber]=useState('')
  const navigate=useNavigate()
  const handleSubmit =async (event) => {
    event.preventDefault();
    if(amount!=="" && accountNumber!==""){
      const response=await fetch(`http://localhost:5000/withdraw/${accountNumber}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          amount: amount
        })
      });
      if(response.ok){
        setAccountNumber("")
        setAmount("")
        alert("Amount Withdrawn successfully")
        navigate("/account")
      }else{
        alert("Failed to Withdraw amount")
      }
    }
    
  };

  return (
    <form onSubmit={handleSubmit} className='col-6 m-3'>
      <div className="form-group">
        <label htmlFor="amount">Amount:</label>
        <input type="number" className="form-control" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <label htmlFor="account">accountNumber:</label>
        <input type="number" className="form-control" id="account" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
      
      <button type="submit" className="btn btn-primary">Withdraw</button>
    </form>
  );
};

export default WithdrawForm;
