import React, { Component } from 'react';

class  Counter extends Component {
  state = {
    counter: this.props.value,
    tags: ['shoe1', 'shoe2', 'shoe3']
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = (product) => {
    console.log(product);
    this.setState( { counter: this.state.counter + 1});
  }

  doHandleIncrement = () => {
    this.handleIncrement( { id: 1});
  }

  render() {

    console.log("props", this.props);

    return (
    <React.Fragment>
      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button onClick={this.doHandleIncrement} className="btn btn-secondary btn-sm">Increment</button>
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