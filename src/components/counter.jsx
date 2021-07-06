import React, { Component } from 'react';

class  Counter extends Component {
  state = {
    counter: 0,
  };

  render() {
    return (
    <React.Fragment>
      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button className="btn btn-secondary btn-sm">Increment</button>
    </React.Fragment>
      );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.counter === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { counter } = this.state;
    return counter === 0 ? "Zero" : counter;
  }
}
 
export default Counter;