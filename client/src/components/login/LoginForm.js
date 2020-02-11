import React from 'react';

const LoginForm = () => {
  return (
    <form className='form'>
      <label htmlFor='userName'>Username</label>
      <input
        type='text'
        name='userName'
        placeholder='Username'
        id='userName'
        className='form__textInput'
      />

      <label htmlFor='password'>Password</label>
      <input
        type='password'
        name='password'
        placeholder='Password'
        id='password'
        className='form__textInput'
      />
      <button className='btn btn--green' type='submit'>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
