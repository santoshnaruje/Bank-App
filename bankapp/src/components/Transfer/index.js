import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TransferForm = () => {
  const [amount, setAmount] = useState('');
  const [receiverAccountNumber, setReceiverAccountNumber] = useState('');
  const [senderAccountNumber, setSenderAccountNumber] = useState('');
  const navigate = useNavigate();

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleReceiverAccountNumberChange = (event) => {
    setReceiverAccountNumber(event.target.value);
  };

  const handleSenderAccountNumberChange = (event) => {
    setSenderAccountNumber(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/transfer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        senderAccountNumber,
        receiverAccountNumber,
        amount,
      }),
    });
    if (response.ok) {
      setReceiverAccountNumber('');
      setSenderAccountNumber('');
      setAmount('');
      alert('Transfer Successful');
      navigate('/account');
    } else {
      alert('Failed to transfer amount');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Transfer Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="receiverAccountNumber">Receiver Account Number:</label>
          <input
            type="text"
            className="form-control"
            id="receiverAccountNumber"
            value={receiverAccountNumber}
            onChange={handleReceiverAccountNumberChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="senderAccountNumber">Sender Account Number:</label>
          <input
            type="text"
            className="form-control"
            id="senderAccountNumber"
            value={senderAccountNumber}
            onChange={handleSenderAccountNumberChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TransferForm;
