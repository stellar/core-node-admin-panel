import React from "react";
import Header from "./Components/Header";
import NodeGraph from "./Components/NodeGraph";
import ExamplePicker from "./Components/ExamplePicker";
import InfoPanel from "./Components/InfoPanel";
import FailureDisplay from "./Components/FailureDisplay";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <InfoPanel>
        <FailureDisplay></FailureDisplay>
      </InfoPanel>
      <NodeGraph />
    </React.Fragment>
  );
};

export default App;
