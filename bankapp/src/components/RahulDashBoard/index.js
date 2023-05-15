import React from 'react';

const RahulDashBoard = () => {
    const transacation=JSON.parse(localStorage.getItem("RahulTransacation"))

  return (
    <div className="container">
      <h2>Transaction History</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>accountNumber</th>
            
          </tr>
        </thead>
        <tbody>
          {transacation.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.accountNumber}</td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RahulDashBoard;
