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
import ImageList from './Components/ImageList';
import NotFound from './Components/NotFound';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <header className="app-header">
        <SearchNavigation />
      </header>
      <div className="main-content">
        <Switch>
          <Route path="/" component={ImageList} />
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
