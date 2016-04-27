import React, { Component } from 'react';
import { connect } from 'react-redux';
import {map} from 'lodash';

export default class FriendList extends Component {

render() {
		const {actions, friends} = this.props;
		
		return (
			<ul>
				{map(friends, ({id, name}) => {
					return (
						<div key={id}>
							<li>{name}
							<button type="button" onClick={() => actions.starFriend(id)}>Star!</button>
							</li>
						</div>
					);
				})}
			
			</ul>
		);
	}
}