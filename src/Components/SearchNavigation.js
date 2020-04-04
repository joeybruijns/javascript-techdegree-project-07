import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      <Container fluid="xl">
        <Row>
          <form className="search-form" onSubmit={this.handleSubmit} >
              <label className="is-hidden" htmlFor="search"></label>
              <input type="search" 
                  onChange={this.onSearchChange}
                  name="search" 
                  placeholder="Search..." />
              <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
          </form>
        </Row>
        <Row>
          <ul className="main-nav">
            <Row>
              <Col xs={12} md={4}><li><NavLink to='#'>Cats</NavLink></li></Col>
              <Col xs={12} md={4}><li><NavLink to='#'>Dogs</NavLink></li></Col>
              <Col xs={12} md={4}><li><NavLink to='#'>Computers</NavLink></li></Col>
            </Row>
          </ul>
        </Row>
      </Container>
    );
  }
}
  
export default SearchNavigation;