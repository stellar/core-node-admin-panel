import React, { useCallback } from "react";

import { HaltingFailure } from "../util/HaltingAnalysis";
import { showExample } from "../Modules/quorum";
import { useDispatch } from "redux-react-hook";
import { useMappedState } from "redux-react-hook";

const ExamplePicker = () => {
  const dispatch = useDispatch();
  // Pull any quorum data out of our state
  const mapState = useCallback(state => {
    return state.quorum.failures;
  }, []);
  const list = useMappedState<HaltingFailure[]>(mapState);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(showExample(e.target.value));
  };

  if (list.length == 0) {
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
          <div>
            <h3>Vulnerable Nodes</h3>
            {failure.vulnerableNodes.map(node => {
              return <div>{node.node}</div>;
            })}
            <h3>Affected Nodes</h3>
            {failure.affectedNodes.map(node => {
              return <div>{node.node}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ExamplePicker;
