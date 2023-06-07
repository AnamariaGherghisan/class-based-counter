
// Import the necessary modules from the 'react' library
import React from "react";

// Define and export the 'Banner' component
// The component accepts two props: 'title' and 'subTitle'
export const Banner = ({ title, subTitle }) => {
  // Render a <div> element with the class name "jumbotron"
  return (
    <div className="jumbotron">
      {/* Render the 'title' prop inside a <div> element with the class name "title" */}
      <div className="title">{title}</div>
      {/* Render the 'subTitle' prop inside a <div> element with the class name "sub-title" */}
      <div className="sub-title">{subTitle}</div>
    </div>
  );
};

// Export the 'Banner' component as the default export
// This allows the component to be imported without specifying the curly braces
export default Banner;