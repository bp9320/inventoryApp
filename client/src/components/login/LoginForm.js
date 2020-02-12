import React from 'react';

const LoginForm = () => {
  return (
    <form className='form'>
      <div className='form__container'>
        <label className='form__label' htmlFor='email'>
          Email
        </label>
        <input
          type='email'
          name='userName'
          placeholder='Email'
          id='email'
          className='form__textInput'
        />

        <label className='form__label' htmlFor='password'>
          Password
        </label>

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
      </div>
    </form>
  );
};

export default LoginForm;
