'use strict';

import React, { Component, PropTypes } from'react';
import {
  Grid,
  Col,
  Row,
  Button,
  Input,
  Panel,
  ListGroup,
  ListGroupItem,
  FormGroup,
  InputGroup,
  FormControl
} from 'react-bootstrap';
import Reflux from 'reflux';
import { findDOMNode } from 'react-dom';
import { Router, Link } from 'react-router';

import FontAwesome from '../components/fontawesome';
import Picture from '../components/picture';

import SearchAction from '../actions/search';
import Footer from './footer';
import SearchStore from '../store/search';

const keys = {
  "BACKSPACE": 8,
  "ESCAPE": 27,
  "UP": 38,
  "LEFT": 37,
  "RIGHT": 39,
  "DOWN": 40,
  "ENTER": 13
};

let delay = (() => {
  var timer = 0;
  return function (callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

const Search = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount() {
    let container = document.getElementById('container');
    container.addEventListener('keypress', this.handleKeyPress);
    container.addEventListener('keydown', this.handleKeyPress);
  },

  componentWillUnmount() {
    let container = document.getElementById('container');
    container.removeEventListener('keypress', this.handleKeyPress);
    container.removeEventListener('keydown', this.handleKeyPress);
  },

  mixins: [
    Reflux.listenTo(SearchStore, 'getSearchResults')
  ],

  getSearchResults(res) {
    this.setState({results: res, numResults: res.length < 5 ? res.length : 5});
  },

  getInitialState() {
    return {
      showQuickSearch: false,
      results: [],
      numResults: 0
    } 
  },

  renderQuickSearch() {
    return this.state.results.map((result, idx) => {
    if (idx < 5) {
      return (<ListGroupItem key={"f" + idx}
        onClick={this.handleClick.bind(null,idx)}
        header={result.title}>{result.desc}
        <br/>
        <a className="btn btn-link" style={{padding:0}} href={result.link} target="_blank">
          {result.link}
        </a>
      </ListGroupItem>)
      }
    })
  },

  renderImages() {
    const searchIcon = <FontAwesome style={{fontsize:20}} icon='search' />;
    const imgSet = [
      {
        media: 'only screen and (min-width: 601px)',
        src: 'http://websearchapp.herokuapp.com/large.png'
      },
      {
        media: 'only screen and (max-width: 600px)',
        src: 'http://websearchapp.herokuapp.com/small.png'
      }
    ];
    const defaultImage = {
      src: 'http://websearchapp.herokuapp.com/default.png',
      alt: 'SearchTheWeb logo'
    };
    return {
      searchIcon: searchIcon,
      logoSet: imgSet,
      defaultImage: defaultImage
    }
  },

  handleClick(targetIndex) {
    if (this.state.numResults >= targetIndex) {
      window.open(this.state.results[targetIndex].link, "_blank");
    }
  }, 

  handleKeyPress(event) {
    // If we detect that the user is using either the Ctrl or Meta key (CMD on Mac), we terminate the function
    // This allows the user to use regular OS methods, such as copy/paste or Ctrl + A to select all of the text
    if (event.ctrKey || event.metaKey) {
      return;
    }

    const inputField = findDOMNode(this.refs.searchInput);
    const charCode = (typeof event.which == 'number') ? event.which : event.keyCode;

    switch (charCode) {
      case keys.BACKSPACE:
        inputField.value.length <= 0 ? this.closeSearchField(event) : null;
        break;

      case keys.ESCAPE:
        this.closeSearchField(event);
        break;

      case keys.LEFT:
      case keys.RIGHT:
        // Allow left and right but don't perform search
        break;

      case keys.UP:
        if (this.state.activeIndex > -1) {
          this.setState({activeIndex: this.state.activeIndex - 1});
        }
        if (this.state.activeIndex < 0) {
          inputField.focus();
          event.preventDefault();
        }
        break;

      case keys.DOWN:
        if (this.state.activeIndex < 5 && this.state.numResults > (1 + this.state.activeIndex)) {
          this.setState({activeIndex: this.state.activeIndex + 1});
        }
        event.preventDefault();
        break;

      case keys.ENTER:
        event.preventDefault();
        if (this.state.activeIndex === -1 || inputField === document.activeElement) {
          if (inputField.value.length > 1) {
            this.context.router.push(null, `/search?q=${inputField.value}`, null);
            this.closeSearchField(event);
            SearchAction.showResults();
          }
        }
        else {
          if (this.state.numResults >= this.state.activeIndex) {
            window.open(this.state.results[this.state.activeIndex].link, '_blank');
          }
        }
        break;

      default:
        inputField.focus();
        delay(() => {
          if (inputField.value.length >= 2) {
            this.performSearch();
          }
        }, 400);

        if (!this.state.showQuickSearch) {
          this.setState({showQuickSearch: true});
        }
        SearchAction.hideResults();
        break;
    }
  },

  performSearch() {
    const val = findDOMNode(this.refs.searchInput).value;
    val.length > 1 ? SearchAction.performSearch(val) : this.setState({results: []});
  },

  render() {
    return (<Grid>
      <Row>
        <Col xs={ 12 } style={{textAlign:'center'}}>
          <Picture
            imgSet={ this.renderImages().logoSet }
            defaultImage={ this.renderImages().defaultImage } />
        </Col>
      </Row>
      <Row>
        <Col xs={ 12 }>
          <form>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>
                  { this.renderImages().searchIcon }
                </InputGroup.Addon>
                <FormControl
                  ref='searchInput'
                  type='text'
                  /* onChange={ this.performSearch } */ />
                <InputGroup.Button>
                  <Button onClick={ this.handleSearchButton }>
                    Search
                  </Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          </form>
          <ListGroup
            style={{display:this.state.showQuickSearch ? 'block' : 'none'}}
            className='quickSearch'>
              { this.renderQuickSearch() }
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={ 12 }>
          {this.props.children}
        </Col>
      </Row>
    </Grid>);
  }
});

export default Search;