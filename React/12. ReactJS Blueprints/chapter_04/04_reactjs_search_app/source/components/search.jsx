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

const Search = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
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
        <a bsStyle="link" style={{padding:0}} href={result.link} target="_blank">
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
                  type='text' />
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