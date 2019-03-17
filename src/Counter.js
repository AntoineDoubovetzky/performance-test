import React, { Component } from 'react';

export default class Counter extends Component {
  numberOfRender = 0;

  render() {
    console.log(
      `render Counter${this.props.withNestedState ? ' withNestedState' : ''}`
    );

    this.numberOfRender++;

    return (
      <span>
        Counter Component (number of render: {this.numberOfRender}):
        {this.props.withNestedState
          ? this.props.state.nestedState.number
          : this.props.number}
      </span>
    );
  }
}
