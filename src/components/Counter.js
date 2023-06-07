import { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
    
    this.state = {count: 0};
    }

  handleDecrement = () => { 
   //step1:console.log("handleDecrement")-for testing purposes to check if the button is working;
   //step2:update the state
  if(this.state.count>0){
  this.setState({
    count: this.state.count - 1,
  });
}
};


handleIncrement = () => {
    //step1:console.log("handleIncrement");
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleReset = () => {
    //step1:console.log("handleReset");
    this.setState({
      count: 0,
    });
  };

  render() {
    console.log("render");
    return (
    <div className="border m-3 p-4 rounded">
    <div className="sub-title text-center mb-3 ">Counter: {this.state.count}</div>
    <div className= "d-grid gap-2 col-6 mx-auto">
      <button className="btn btn-success text-center" onClick={this.handleDecrement}>Decrement</button>
      <button className="btn btn-danger text-center" onClick={this.handleReset}>Reset</button>
      <button className="btn btn-success text-center" onClick={this.handleIncrement}>Increment</button>
    </div>
    </div>
    );

  }
}
