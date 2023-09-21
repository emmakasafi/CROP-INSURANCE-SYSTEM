// Signup.js
import React from 'react';
import { Link } from 'react-router-dom';

function Signup () {
  return (
    <div className='bg-primary w-25 align-items-center justify-content-center ml-5'>
      <form>
        <h3>REGISTER HERE</h3>
        <label htmlFor='username'></label>
        <input type='text' placeholder='username' className='form-control'></input>
        <label htmlFor='password'></label>
        <input type='password' placeholder='password' className='form-control'></input>
        <button className='bg-success rounded-3 form-control'>SIGN UP</button>

        <Link to="/Login">Click here to log in</Link>
      </form>
      
    </div>
  )
}

export default Signup;
