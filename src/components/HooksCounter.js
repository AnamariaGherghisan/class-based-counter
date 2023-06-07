// Import the necessary modules from the 'react' library
import React, { useState } from "react";

// Define a functional component called 'HooksCounter'
export const HooksCounter = () => {
  // Declare a state variable called 'count' and a function to update it called 'setCount', using the 'useState' hook. Initialize 'count' to 0.
  const [count, setCount] = useState(0);

  // Define a function called 'handleDecrement' that is triggered when the decrement button is clicked
  const handleDecrement = () => {
    // Check if the 'count' is greater than 0 before decrementing it
    if (count > 0) {
      // Update the 'count' state by subtracting 1 using the 'setCount' function provided by the 'useState' hook
      setCount(count - 1);
    }
  };

  // Define a function called 'handleIncrement' that is triggered when the increment button is clicked
  const handleIncrement = () => {
    // Update the 'count' state by adding 1 using the 'setCount' function provided by the 'useState' hook
    setCount(count + 1);
  };

  // Define a function called 'handleReset' that is triggered when the reset button is clicked
  const handleReset = () => {
    // Update the 'count' state to 0 using the 'setCount' function provided by the 'useState' hook
    setCount(0);
  };

  // Return the JSX markup to be rendered by the component
  return (
    <div className="border m-3 p-4 rounded">
      <div className="sub-title text-center mb-3"> Hooks Counter: {count}</div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-success text-center" onClick={handleDecrement}>
          Decrement
        </button>
        <button className="btn btn-danger text-center" onClick={handleReset}>
          Reset
        </button>
        <button className="btn btn-success text-center" onClick={handleIncrement}>
          Increment
        </button>
      </div>
    </div>
  );
};