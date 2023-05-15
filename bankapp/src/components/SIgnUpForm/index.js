import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async(e) => {
    
    e.preventDefault();
    const data = {
      username,
      email,
      password,
      accountNumber
    
    };
    if(username!==""&& email!=="" && password!==""&& accountNumber!==""){
      localStorage.setItem("accountNumber",JSON.stringify(accountNumber))
    setUsername("")
    setEmail("")
    setPassword("")
    setAccountNumber("")
    
    
    
  
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
console.log(JSON.stringify(data))
    if (response.ok) {
      console.log("User registered successfully!");
      alert("account created successfully")
    navigate("/login")
      // You can redirect to a success page or perform any other action here
    } else {
      console.log("Error registering user.");
      // You can display an error message or perform any other action here
    }
  }
  else{
      alert("Enter all Required Details")
  }
  };

 
    

  return (
    <form onSubmit={handleSubmit} className='col-6 m-3'>
      <div className="form-group">
        <label htmlFor="firstName">User Name:</label>
        <input type="text" className="form-control" id="firstName" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="accountNumber">Account Number:</label>
        <input type="text" className="form-control" id="accountNumber" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
      </div>
      <input className='btn btn-primary' type='submit' value="signup" />
    </form>
  );
};

export default SignupForm;
