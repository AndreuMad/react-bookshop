import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BookDetails from './BookDetails';

import * as bookActions from '../../actions/bookActions';

class BookDetailsPage extends Component {

  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.props.fetchBookById(this.props.params.id);
  }

  addToCart(book) {

    const item = {
      title: book.title,
      price: book.price
    };
    this.props.addToCart(item);
  }

  render() {

    return (
      <div>
        <h1>Book Details Page</h1>
        <BookDetails book={this.props.book} addToCart={this.addToCart} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

  return {
    book: state.book
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    fetchBookById: bookId => dispatch(bookActions.fetchBookById(bookId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage);
