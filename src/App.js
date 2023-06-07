// Import the necessary module from the 'react' library
import React from "react";
// Import the 'Banner' component from the './components/Banner' module
import Banner from "./components/Banner";
// Import the 'Counter' component from the './components/Counter' module
import Counter from "./components/Counter";
// Import the 'HooksCounter' component from the './components/HooksCounter' module
import { HooksCounter } from "./components/HooksCounter";

// Define a functional component called 'App'
const App = () => {
  // Return the JSX markup to be rendered by the component
  return (
    <div>
      {/* Render the 'Banner' component with the specified 'title' and 'subTitle' props */}
      <Banner
        title="React Counter"
        subTitle="Please use the buttons to interact with your counter"
      />
      {/* Render the 'Counter' component */}
      <Counter />
      {/* Render the 'HooksCounter' component */}
      <HooksCounter />
    </div>
  );
};

// Export the 'App' component as a default export, allowing it to be imported by other modules
export default App;
