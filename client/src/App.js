import React from 'react';
import Navbar from './components/layout/Navbar';
import LoginForm from './components/login/LoginForm';
import './sass/App.scss';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <LoginForm />
    </div>
  );
};

export default App;
