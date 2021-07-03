import React, { Component } from 'react';

class  Counter extends Component {
  state = {
    counter: 0
  };

  render() { 
    return (
    <React.Fragment>
      <span>{this.formatCount()}</span>
      <button>Increment</button>
    </React.Fragment>
      );
  }

  formatCount() {
    const { counter } = this.state;
    return counter === 0 ? "Zero" : counter;
  }
}
 
export default Counter;