import React from "react";
import Banner from "./components/Banner";
import Counter from "./components/Counter";
import {HooksCounter} from "./components/HooksCounter";


const App = () => {
  return (
<div>
      <Banner
        title="React Counter"
        subTitle="Please use the buttons to interact with your counter"
      />
      <Counter />
      <HooksCounter />
    </div>
  );
};

export default App;

