import {
  CREATE_BOOK_SUCCESS,
  FETCH_BOOK_BY_ID_SUCCESS,
  FETCH_BOOK_SUCCESS } from '../constants/actions';

export const bookReducer = (state = [], action) => {
  switch(action.type) {

    case FETCH_BOOK_BY_ID_SUCCESS:
      return action.book;

    default:
      return state;
  }
};

export const booksReducer = (state = [], action) => {
  switch (action.type) {

    case CREATE_BOOK_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.book)
      ];

    case FETCH_BOOK_SUCCESS:
      return action.books;

    default:
      return state;
  }
};
