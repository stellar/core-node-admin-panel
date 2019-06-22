import React from "react";
import NodeGraph from "./Components/NodeGraph";
import ExamplePicker from "./Components/ExamplePicker";
import FailureDisplay from "./Components/FailureDisplay";
const App: React.FC = () => {
  return (
    <React.Fragment>
      <ExamplePicker />
      <FailureDisplay />
      <NodeGraph />
    </React.Fragment>
  );
};

export default App;
