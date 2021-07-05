import React, { Component } from 'react';

class  Counter extends Component {
  state = {
    counter: 0,
  };

  styles = {
    fontSize: 60,
    fontWeight: "bold"
  };

  render() { 
    return (
    <React.Fragment>
      <span style={{fontSize: 50}} className="badge badge-primary m-2">{this.formatCount()}</span>
      <button className="btn btn-secondary btn-sm">Increment</button>
    </React.Fragment>
      );
  }

  formatCount() {
    const { counter } = this.state;
    return counter === 0 ? "Zero" : counter;
  }
}
 
export default Counter;