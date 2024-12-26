// src/App.js
import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="App">
      {showRegister ? <Register /> : <Login />}
      <div className="toggle-container">
        <p onClick={() => setShowRegister(!showRegister)} className="toggle-text">
          {showRegister
            ? 'Already have an account? Login'
            : 'Don’t have an account? Register'}
        </p>
      </div>
    </div>
  );
}

export default App;
