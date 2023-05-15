import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="d-flex flex-row justify-content-center align-items-center">
      <Link to="/login" className="btn btn-primary m-3">Login</Link>
      <Link to="/signup" className="btn btn-primary m-3">Sign Up</Link>
    </div>
  );
};

export default Home;
