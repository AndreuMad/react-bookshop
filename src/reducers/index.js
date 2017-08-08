import { combineReducers } from 'redux';
import { bookReducer, booksReducer } from './bookReducer';

export default combineReducers({
  book: bookReducer,
  books: booksReducer
});
