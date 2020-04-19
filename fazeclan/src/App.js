import React, { Component } from 'react';
import './App.css';
import Header from './components/Layout/Header'
import ActiveUser from './components/Layout/ActiveUser'
import TopUser from './components/Layout/TopUser'
import UserFavorites from './components/Layout/UserFavorites'



class App extends Component {



  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
        <ActiveUser />
        <UserFavorites />
        <TopUser />
        </div>
      </div>
    );
  }
}

export default App;
