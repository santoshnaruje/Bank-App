import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Account = () => {
  const [data, setData] = useState({ username: '', accountNumber: '', balance: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const accont = JSON.parse(localStorage.getItem("accountNumber"));
      console.log(accont)
      const response = await fetch(`http://localhost:5000/user/${accont}`);
      const userData = await response.json();
      setData(userData);
    };
    fetchUserData();
  }, []);

  const handleDepositClick = () => {
    navigate('/deposit');
  };

  const handleWithdrawClick = () => {
    navigate('/withdraw');
  };

  const handleTransferClick = () => {
    navigate('/transfer');
  };

  const handleHistoryClick = () => {
    navigate('/history');
  };

  const { username, balance, accountNumber } = data;
  console.log(data)

  return (
    <div className="container my-5">
      <h2 className="mb-4">Account Details</h2>
      <div className="row">
        <div className="col-md-6">
          <p className="fw-bold">Account Number:</p>
          <p className="lead">{accountNumber}</p>
        </div>
        <div className="col-md-6">
          <p className="fw-bold">Username:</p>
          <p className="lead">{username}</p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <p className="fw-bold">Balance:</p>
          <p className="lead">{balance}</p>
        </div>
      </div>
      <button className="btn btn-primary m-3" onClick={handleDepositClick}>
        Deposit
      </button>
      <button className="btn btn-primary m-3" onClick={handleWithdrawClick}>
        Withdraw
      </button>
      <button className="btn btn-primary m-3" onClick={handleTransferClick}>
        Transfer
      </button>
      <button className="btn btn-primary m-3" onClick={handleHistoryClick}>
        Account Statement
      </button>
    </div>
  );
};

export default Account;
