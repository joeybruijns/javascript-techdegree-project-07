import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import APIKey from './config';

import SearchNavigation from './Components/SearchNavigation';
import Home from './Components/Home';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <header className="app-header">
        <SearchNavigation />
      </header>
      <div className="main-content">
        <Home />
      </div>
    </div>
  </BrowserRouter>
);

export default App;
