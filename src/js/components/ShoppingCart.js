import React from 'react';
import { DropTarget } from 'react-dnd';

// ShoppingCart DND Spec
//  " A Plain object implementing the drop target specification"
//  DropTarget methods (all optional)
//    - drop: called when a compatible item is dropped
//    - hover: called when an item is hovered over the component
//    - canDrop: used to specify whether the drop target is able to accept the item
const ShoppingCartSpec = {
  drop() {
    return { name: 'ShoppingCart' };
  }
};

// ShoppingCart DropTarget - Collect
let collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
};

const ShoppingCart = React.createClass({
  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = '#FFFFFF';
    if(isActive) {
      backgroundColor = '#F7f7BD';
    } else if(canDrop) {
      backgroundColor = '#F7f7f7';
    }

    const style = { backgroundColor };

    return connectDropTarget(
      <div className='shopping-cart' style={style}>
        { isActive ?
          'Hummmm, snack!':
          'Drag here to order!'
        }
      </div>
    );
  }
});

export default DropTarget("snack", ShoppingCartSpec, collect)(ShoppingCart);
