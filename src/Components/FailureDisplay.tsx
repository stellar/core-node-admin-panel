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
      <h3>Failures</h3>
      {list.map(failure => {
        const key = failure.affectedNodes.map(n => n.node).join(",");
        return (
          <div key={key}>
            <b>
              Losing{" "}
              {failure.vulnerableNodes
                .map(node => {
                  return node.node;
                })
                .join(", ")}
            </b>
            <span> takes down </span>
            {failure.affectedNodes
              .map(node => {
                return node.node;
              })
              .join(", ")}
          </div>
        );
      })}
    </div>
  );
};

export default FailureDisplay;
