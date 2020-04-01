import React, { Component } from 'react';

class SearchNavigation extends Component {
  
  state = {
    searchText: ''
  }
  
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    e.currentTarget.reset();
  }
  
  render() {  
    return (
        <nav>
            <form className="search-form" onSubmit={this.handleSubmit} >
                <label className="is-hidden" htmlFor="search">Search</label>
                <input type="search" 
                    onChange={this.onSearchChange}
                    name="search" 
                    placeholder="Search..." />
                <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
            </form>

            <ul className="main-nav">
                <li><a href='#'>Cats</a></li>
                <li><a href='#'>Dogs</a></li>
                <li><a href='#'>Computers</a></li>
            </ul>
        </nav>
    );
  }
}
  
export default SearchNavigation;