// Import the necessary modules from the 'react' and 'react-dom' libraries
import React from "react";
import ReactDOM from "react-dom";

// Import the 'App' component from the "./App" file
import App from "./App";

// Import the CSS styles from the "./index.css" file
import "./index.css";

// Get the HTML element with the id "root"
const root = document.getElementById("root");

// Render the 'App' component inside the 'root' element
ReactDOM.render(<App />, root);