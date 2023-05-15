import React, { useState, useEffect } from 'react';

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);
 
  useEffect(() => {
    
    const accountNumber = localStorage.getItem("accountNumber");
    
    fetch(`http://localhost:5000/transactions/${accountNumber}`)
      .then(response => response.json())
      .then(data => setTransactions(data));
  }, []);

  return (
    
    <div className="container">
      <h2>Transaction History</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Account Number</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.timestamp}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.senderAccountNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
