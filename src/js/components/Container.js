import React from 'react';
import Snack from './Snack';
import ShoppingCart from './ShoppingCart';

const Container = React.createClass({

  render() {
    return (
      <div>
        <Snack name='Chips' />
        <Snack name='Cupcake' />
        <Snack name='Donut' />
        <Snack name='Doritos' />
        <Snack name='Popcorn' />
        <ShoppingCart />
      </div>
    );
  }
});

export default DragDropContext(Html5Backend)(Container);
