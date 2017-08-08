import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../../actions/bookActions';

class CartPage extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCart();
  }

  render() {

    return (
      <div>
        <h1>Cart Page</h1>
        <table className="table">
          <tr>
            <td>Title</td>
            <td>Price</td>
          </tr>
          {
            this.props.items.map( (item, index) => {

              return (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                </tr>
              );
            })
          }
        </table>
      </div>
    );
  }
}

export default CartPage;
