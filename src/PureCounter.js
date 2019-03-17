import React, { PureComponent } from 'react';

export default class PureCounter extends PureComponent {
  numberOfRender = 0;

  render() {
    console.log(
      `render PureCounter${
        this.props.withNestedState ? ' withNestedState' : ''
      }`
    );

    this.numberOfRender++;

    return (
      <span>
        Counter PureComponent (number of render: {this.numberOfRender}):
        {this.props.withNestedState
          ? this.props.state.nestedState.number
          : this.props.number}
      </span>
    );
  }
}
