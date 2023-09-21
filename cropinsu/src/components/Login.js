// Login.js
import React from 'react';

const Login = () => {
  return (
    <div className='align-items-center justify-content-center d-flex bg-secondary vh-100'>
      <div className='bg-white p-3 w-25  '>
        <form>
          <div>
            <label htmlFor="username"></label>
            <input type='text' name='username' className='form-control' placeholder='username' />
          </div>

          <div>
            <label htmlFor="password"></label>
            <input type='password' name='password' className='form-control' placeholder='password'/>
          </div>

          <div>
            <button className='btn btn-success rounded-3 w-100'>Log in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
