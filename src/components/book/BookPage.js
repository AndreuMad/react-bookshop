import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as bookActions from '../../actions/bookActions';

import BookForm from './BookForm';

class Book extends Component {
  constructor(props) {
    super(props);

    this.submitBook = this.submitBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  // Submit book handler
  submitBook(input) {
    this.props.createBook(input);
  }

  // Delete book handler
  deleteBook(id) {
    this.props.deleteBook(id);
  }

  render() {

    return (
      <div className="row">
        <div className="col-md-6">
          <h3>Books</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {this.props.app.requestFinished ?
              this.props.books.map((book, index) => (
                <tr key={index}>
                  <td>{book.name}</td>
                  <td><Link to={`/books/${book.id}`}>View</Link></td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deleteBook(book.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )) :
              'loading...'
            }
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <h3>New Book</h3>
          <BookForm submitBook={this.submitBook} />
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  books: PropTypes.array.isRequired,
  createBook: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    app: state.app,
    books: state.books
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBook: book => dispatch(bookActions.createBook(book)),
    deleteBook: id => dispatch(bookActions.deleteBook(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
