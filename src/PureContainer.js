import React, { PureComponent } from 'react';
import Counter from './Counter';
import PureCounter from './PureCounter';

export default class PureContainer extends PureComponent {
  numberOfRender = 0;

  render() {
    console.log(
      `render PureContainer${
        this.props.withNestedState ? ' withNestedState' : ''
      }`
    );

    this.numberOfRender++;

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: 16,
        }}
      >
        <span>Pure Container (number of render: {this.numberOfRender}):</span>
        {this.props.withNestedState ? (
          <>
            <Counter state={this.props.state} withNestedState />
            <PureCounter state={this.props.state} withNestedState />
          </>
        ) : (
          <>
            <Counter number={this.props.state.number} />
            <PureCounter number={this.props.state.number} />
          </>
        )}
      </div>
    );
  }
}
