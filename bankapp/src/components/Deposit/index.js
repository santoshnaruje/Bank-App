import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DepositForm = () => {
  const [amount, setAmount] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(amount!=="" && accountNumber!==""){
      const response=await fetch(`http://localhost:5000/deposit/${accountNumber}`, {
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
        alert("Amount deposited successfully")
        navigate("/account")
      }else{
        alert("Failed to deposit amount")
      }
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="col-6 m-3">
      <div className="form-group">
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          className="form-control"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <label htmlFor="account">Account Number:</label>
      <input
        type="number"
        className="form-control"
        id="account"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Deposit
      </button>
    </form>
  );
};

export default DepositForm;
