// Import the necessary modules from the 'react' library
import React, { Component } from "react";

// Define a class-based component called 'Counter' that extends the 'Component' class from 'react'
export class Counter extends Component {
  // Constructor function to initialize the component's state and bind the methods to the component instance
  constructor(props) {
    // Call the parent class's constructor using 'super' to access and initialize the inherited properties and methods
    super(props);

    // Set the initial state of the component with a property called 'count' initialized to 0
    this.state = { count: 0 };
  }

  // Method that decrements the 'count' state value by 1 if it's greater than 0
  handleDecrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };

  // Method that increments the 'count' state value by 1
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  // Method that resets the 'count' state value to 0
  handleReset = () => {
    this.setState({
      count: 0,
    });
  };

  // Render method that returns the JSX markup to be rendered by the component
  render() {
    return (
      <div className="border m-3 p-4 rounded">
        <div className="sub-title text-center mb-3">Counter: {this.state.count}</div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-success text-center" onClick={this.handleDecrement}>
            Decrement
          </button>
          <button className="btn btn-danger text-center" onClick={this.handleReset}>
            Reset
          </button>
          <button className="btn btn-success text-center" onClick={this.handleIncrement}>
            Increment
          </button>
        </div>
      </div>
    );
  }
}

// Export the 'Counter' component as the default export
export default Counter;