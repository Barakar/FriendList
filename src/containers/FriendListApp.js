import React, { Component } from 'react';
import { bindActionCreators } from 'redux';  
import { Provider,connect } from 'react-redux';
import * as FriendsActions from '../action/friendsActions';
import FriendList from './FriendList';

@connect(state => { 
	return {
  friendlist: state.friends
}})
export default class FriendListApp extends Component {

render() {

	const { friendlist: { friendsById }, dispatch } = this.props;
    const actions = bindActionCreators(FriendsActions, dispatch);


    return (
    	<div>
     	   <h1>The FriendList</h1>
        	{/*<AddFriendInput addFriend={actions.addFriend} />*/}
        	<FriendList friends={friendsById} actions={actions} />
      	</div>
    );
  }
}