import React, { useCallback } from "react";

import { HaltingFailure } from "../util/HaltingAnalysis";
import { useMappedState } from "redux-react-hook";

const FailureDisplay = () => {
  // Pull any quorum data out of our state
  const mapState = useCallback(state => {
    return state.quorum.failures;
  }, []);
  const list = useMappedState<HaltingFailure[]>(mapState);

  if (list.length === 0) {
    return (
      <div>
        <h3>No Failures</h3>
      </div>
    );
  }

  return (
    <div>
      <h1>Failures</h1>
      {list.map(failure => {
        return (
          <div key={failure.affectedNodes.map(n => n.node).join(",")}>
            <h3>Vulnerable Nodes</h3>
            {failure.vulnerableNodes.map(node => {
              return <div key={node.node}>{node.node}</div>;
            })}
            <h3>Affected Nodes</h3>
            {failure.affectedNodes
              .map(node => {
                return node.node;
              })
              .join(",")}
          </div>
        );
      })}
    </div>
  );
};

export default FailureDisplay;
