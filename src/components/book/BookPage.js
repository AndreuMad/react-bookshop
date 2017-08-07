import React, { Component } from 'react';

class Book extends Component {
  constructor(props) {
    super(props);
  }

  // Submit book handler
  submitBook(input) {
    alert('submitted');
  }

  render() {
    // Title input tracker
    let titleInput;

    return (
      <div>
        <h3>Books</h3>

        <ul>
          { this.props.books.map( (book, index) => <li key={index}>{book.title}</li> )}
        </ul>

        <div>
          <h3>Books Form</h3>
          <form onSubmit={event => {
            event.preventDefault();
            this.submitBook({ title: titleInput.value });
            // Reset Form
            event.target.reset();
          }}>
            <input type="text" name="title" ref={node => this.titleInput = node} />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Book;
