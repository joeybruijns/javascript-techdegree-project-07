import React, {Component} from 'react';
import {Redirect} from 'react-router';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './Components/Navigation';
import Search from './Components/Search';
import ImageList from './Components/ImageList';
import Error404 from './Components/Error404'

// Global variables for using the Flickr API
const Flickr = require('flickr-sdk');
const api = require('./config.js');
const flickr = new Flickr(`${api.default}`);

class App extends Component {

  constructor() {
    super();
    this.state = {
      imageSearch: [],
      catImages: [],
      dogImages: [],
      horseImages: [],
      searchText: '',
      loading: true
    };
  } 

  // Mount components for the search function and the defaults
  componentDidMount() {
    this.performSearch();
    this.performSearch('cats');
    this.performSearch('dog');
    this.performSearch('horses');
  }

  // Perform the requested search or display the default images when clicked
  performSearch = (search) => {
    flickr.photos.search({
      text: search
    }).then(res => {
      console.log(res.body);
      if (search === 'cats') {
        this.setState({
          catImages: res.body,
          loading: false
        });
      } else if (search === 'dog') {
        this.setState({
          dogImages: res.body,
          loading: false
        });
      } else if (search === 'horses') {
        this.setState({
          horseImages: res.body,
          loading: false
        });
      } else {
        this.setState({
          imageSearch: res.body,
          searchText: search,
          loading: false
        });
      }
    }).catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="app-header">
            <Search onSearch={this.performSearch} />
            <Navigation />
          </header>
          <div className="main-content">
            <Switch>
              <Route exact path="/" render={ () => <Redirect to='/cats' />} />
              <Route exact path="/search/cats" render={ () => <Redirect to='/cats' />} />
              <Route exact path="/search/dogs" render={ () => <Redirect to='/dogs' />} />
              <Route exact path="/search/horses" render={ () => <Redirect to='/horses' />} />
              <Route exact path="/cats" render={ () => <ImageList data={this.state.catImages} text="Cats" loading={this.state.loading} />} />
              <Route exact path="/dogs" render={ () => <ImageList data={this.state.dogImages} text="Dogs" loading={this.state.loading} />} />
              <Route exact path="/horses" render={ () => <ImageList data={this.state.horseImages} text="Horses" loading={this.state.loading} />} />
              <Route exact path="/search/:query" render={ (props) => <ImageList data={this.state.imageSearch} {...props} text={this.state.searchText} loading={this.state.loading} />} />
              <Route component={Error404} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
