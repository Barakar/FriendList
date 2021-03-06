
import {types} from '../constans/ActionTypes.js';

export function addFriend(name) {  
  return {
    type: types.ADD_FRIEND,
    name
  };
}

export function deleteFriend(id) {  
  return {
    type: types.DELETE_FRIEND,
    id
  };
}

export function starFriend(id) {  
  return {
    type: types.STAR_FRIEND,
    id
  };
}