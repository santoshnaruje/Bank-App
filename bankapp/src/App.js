import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignupForm from './components/SIgnUpForm';
import LoginForm from './components/Login Form';
import Account from './components/AccountDetails';
import WithdrawForm from './components/WithDraw';
import DepositForm from './components/Deposit';
import TransferForm from './components/Transfer';
import TransactionHistory from './components/TransacationsHistory';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={LoginForm}/>
        <Route path="/signup" Component={SignupForm } />
        <Route path="/" Component={Home } />
        <Route path="/account" Component={Account } />
        <Route path="/withdraw" Component={WithdrawForm } />
        <Route path="/deposit" Component={DepositForm } />
        <Route path="/transfer" Component={TransferForm } />
        <Route path="/history" Component={TransactionHistory } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


