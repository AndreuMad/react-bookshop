import { combineReducers } from 'redux';

import { appReducer } from './appReducer';

import {
  bookReducer,
  booksReducer
} from './bookReducer';

export default combineReducers({
  app: appReducer,
  book: bookReducer,
  books: booksReducer
});
