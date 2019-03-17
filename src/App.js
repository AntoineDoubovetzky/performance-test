import React, { Component } from 'react';
import './App.css';
import Container from './Container';
import PureContainer from './PureContainer';

class App extends Component {
  state = {
    number: 1,
    nestedState: {
      number: 1,
    },
  };

  incrementState = () => {
    this.setState(state => ({
      number: state.number + 1,
      nestedState: {
        ...state.nestedState,
        number: state.nestedState.number + 1,
      },
    }));
  };

  mutateState = () => {
    this.state.number = this.state.number + 1;
    this.state.nestedState.number = this.state.nestedState.number + 1;
    // If we don't force the update of the component, it won't rerender
    this.forceUpdate();
  };

  onForceUpdateClick = () => {
    this.forceUpdate();
  };

  render() {
    console.log('render App', this.state);
    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <button
          style={{
            height: 50,
            width: 200,
            margin: 16,
            display: 'flex',
            justifyContent: 'center',
          }}
          onClick={this.onForceUpdateClick}
        >
          force update
        </button>
        <button
          style={{
            height: 50,
            width: 200,
            margin: 16,
            display: 'flex',
            justifyContent: 'center',
          }}
          onClick={this.incrementState}
        >
          increment state
        </button>
        <button
          style={{
            height: 50,
            width: 200,
            margin: 16,
            display: 'flex',
            justifyContent: 'center',
          }}
          onClick={this.mutateState}
        >
          mutate state
        </button>

        <div style={{ marginTop: 50 }}>State</div>
        <Container state={this.state} />
        <PureContainer state={this.state} />

        <div style={{ marginTop: 50 }}>Nested state</div>
        <Container state={this.state} withNestedState />
        <PureContainer state={this.state} withNestedState />
      </div>
    );
  }
}

export default App;
