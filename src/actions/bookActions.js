import Axios from 'axios';

import {
  CREATE_BOOK_SUCCESS,
  DELETE_BOOK_SUCCESS,
  FETCH_BOOK_SUCCESS,
  FETCH_BOOK_BY_ID_SUCCESS,
  ADD_TO_CART_SUCCESS,
  FETCH_CART_SUCCESS
} from '../constants/actions';

import { requestStatus } from './appActions';

const apiUrl = 'http://5989b10ba369150011e9088b.mockapi.io/books';
const apiUrlCart = 'http://5989b10ba369150011e9088b.mockapi.io/cart';

// Create Book

export const createBook = (book) => {

  return (dispatch) => {

    dispatch(requestStatus(false));

    return Axios.post(apiUrl, book)
      .then(response => {
        // Dispatch a synchronous action
        // to handle data
        dispatch(createBookSuccess(response.data));

        dispatch(requestStatus(true));
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

// Delete Book
export const deleteBook = (id) => {

  return (dispatch) => {

    dispatch(requestStatus(false));

    return Axios.delete(`${apiUrl}/${id}`)
      .then(response => {
        dispatch(deleteBookSuccess(response.data));

        dispatch(requestStatus(true));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const deleteBookSuccess = (book) => {

  return {
    type: DELETE_BOOK_SUCCESS,
    id: book.id
  };
};

// Fetch Books

// Async action
export const fetchBooks = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {

    dispatch(requestStatus(false));
    // Returns a promise
    return Axios.get(apiUrl)
      .then(response => {
        // Dispatch another action to consume data
        dispatch(fetchBooksSuccess(response.data));

        dispatch(requestStatus(true));
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

// Add to Cart
export const addToCart = (item) => {

  return (dispatch) => {

    return Axios.post(apiUrlCart, item)
      .then(response => {
        dispatch(addToCartSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const addToCartSuccess = (item) => {

  return {
    type: ADD_TO_CART_SUCCESS,
    item
  };
};

// Fetch Cart
export const fetchCart = () => {

  return (dispatch) => {

    return Axios.get(apiUrlCart)
      .then(response => {
        dispatch(fetchBooksSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchCartSuccess = (items) => {

  return {
    type: FETCH_CART_SUCCESS,
    items
  };
};
