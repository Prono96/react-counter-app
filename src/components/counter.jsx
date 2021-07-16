import React, { Component } from 'react';

class  Counter extends Component {
  

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  doHandleIncrement = () => {
    this.handleIncrement( { id: 1});
  }

  render() {
    return (
    <React.Fragment>
      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
      <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
    </React.Fragment>
      );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { counter } = this.props.counter;
    return counter === 0 ? "Zero" : counter;
  }
}
 
export default Counter;