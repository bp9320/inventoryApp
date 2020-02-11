import React from 'react';
import Navbar from './components/layout/Navbar';
import LoginForm from './components/login/LoginForm';
import './sass/App.scss';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <h1>Put App Here</h1>
      <LoginForm />
    </div>
  );
};

export default App;
