import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/common/HomePage';
import About from './components/common/AboutPage';

import Book from './components/book/BookPage';
import BookDetailsPage from './components/book/BookDetailsPage';

import CartPage from './components/cart/CartPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
    <Route path="/books" component={Book} />
    <Route path="/books/:id" component={BookDetailsPage} />

    <Route path="/cart" component={CartPage} />
  </Route>
);
