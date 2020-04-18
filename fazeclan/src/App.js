import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header'
import ActivUser from './components/Layout/ActiveUser'

function App() {
  return (
    <div className="App">
      <Header />
      <ActivUser />
    </div>
  );
}

export default App;
