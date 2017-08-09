import {
  ADD_TO_CART_SUCCESS,
  FETCH_CART_SUCCESS
} from '../constants/actions';

export default (state = [], action) => {
  switch(action.type) {
    case ADD_TO_CART_SUCCESS:
      return action.item;
    case FETCH_CART_SUCCESS:
      return action.items;
    default:
      return state;
  }
};
