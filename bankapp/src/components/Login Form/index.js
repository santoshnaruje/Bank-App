import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [password, setPassword] = useState('');
const navigate=useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { accountNumber, password };
    const response =await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    
    })
    console.log(data)
     if(response.status===200){
      localStorage.setItem("accountNumber",JSON.stringify(accountNumber))
    
      navigate("/account")
     } 
    else{
        alert("userName and Password is not Correct please enter valid credentials")
        setAccountNumber("")
        setPassword("")
    }
    
  };

  return (
    <form onSubmit={handleSubmit} className='col-6 m-3 '>
      <div className="mb-3">
        <label htmlFor="accountNumber" className="form-label">AccountNumber</label>
        <input type="text" className="form-control" id="accountNumber" value={accountNumber} onChange={(event) => setAccountNumber(event.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  );
};

export default LoginForm;
