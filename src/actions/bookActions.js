import Axios from 'axios';

import {
  CREATE_BOOK_SUCCESS,
  FETCH_BOOK_SUCCESS,
  FETCH_BOOK_BY_ID_SUCCESS
} from '../constants/actions';

const apiUrl = 'http://5989b10ba369150011e9088b.mockapi.io/books';

// Create Book

export const createBook = (book) => {

  return (dispatch) => {

    return Axios.post(apiUrl, book)
      .then(response => {
        // Dispatch a synchronous action
        // to handle data
        dispatch(createBookSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createBookSuccess = (book) => {

  return {
    type: CREATE_BOOK_SUCCESS,
    book
  };
};

// Fetch Books

// Async action
export const fetchBooks = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return Axios.get(apiUrl)
      .then(response => {
        // Dispatch another action to consume data
        dispatch(fetchBooksSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchBooksSuccess = (books) => {

  return {
    type: FETCH_BOOK_SUCCESS,
    books
  };
};

// Fetch Book by ID
export const fetchBookById = (bookId) => {
  return (dispatch) => {
    return Axios.get(`${apiUrl}/${bookId}`)
      .then(response => {
        dispatch(fetchBookByIdSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchBookByIdSuccess = (book) => {

  return {
    type: FETCH_BOOK_BY_ID_SUCCESS,
    book
  };
};
