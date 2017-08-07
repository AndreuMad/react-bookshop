import CREATE_BOOK from '../constants/actions';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    default:
      return state;
  }

};
