import { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return  (
    <div className="border m-3 p-4 rounded">
    <div className="sub-title text-center mb-3 ">Counter: 0</div>
    <div className= "d-grid gap-2 col-6 mx-auto">
      <button className="btn btn-success text-center">Decrement</button>
      <button className="btn btn-danger text-center">Reset</button>
      <button className="btn btn-success text-center">Increment</button>
    </div>
    </div>
    );

  }
  }
