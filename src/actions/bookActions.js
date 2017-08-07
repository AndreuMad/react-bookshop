import CREATE_BOOK from '../constants/actions';

export const createBook = (book) => {

  return {
    type: CREATE_BOOK,
    book
  };
};
