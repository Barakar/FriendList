import React, { Component } from 'react';
import { combineReducers } from 'redux';  
import { Provider,connect } from 'react-redux';

@connect(state => { 
	return {
  friendlist: state.friends.friendsById
}})
export default class App extends Component {
render() {
    return (
      <h1>{JSON.stringify(this.props.friendlist, null, 2)}</h1>
    );
  }
}