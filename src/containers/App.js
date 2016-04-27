import React, { Component } from 'react';  
import { Provider, connect } from 'react-redux';

import configureStore from '../store/configureStore';
import DevTools from './DevTools';
import FriendListApp from './FriendListApp';  

const store = configureStore();
/*

store.dispatch(addFriend('Barack Obama'));

store.dispatch(starFriend(4));  
*/
export default class App extends Component {
	render() {
	    return (
	      <div>
	        <Provider store={store}>
	          <FriendListApp />
	        </Provider>
	        
	        <DevTools store={store}/>
	      </div>
    	);
	}
  
}
