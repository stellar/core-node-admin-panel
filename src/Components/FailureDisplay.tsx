import React, { useCallback, FunctionComponent } from "react";

import { HaltingFailure } from "../util/HaltingAnalysis";
import { selectFailure } from "../Modules/quorum";
import { useMappedState, useDispatch } from "redux-react-hook";
import s from "./FailureDisplay.module.css";

import { NetworkGraphNode } from "../Types/NetworkTypes";

const FailureDisplay: FunctionComponent = ({ children }) => {
  // Pull any quorum data out of our state
  const mapState = useCallback(state => {
    return {
      list: state.quorum.failures,
      selectedFailure: state.quorum.selectedFailure
    };
  }, []);
  const { list, selectedFailure } = useMappedState<{
    list: HaltingFailure[];
    selectedFailure: HaltingFailure;
  }>(mapState);
  const dispatch = useDispatch();

  function nodeList(nodes: NetworkGraphNode[]) {
    return nodes.map(node => (
      <div key={node.node} className={`${s.VulnerableNode} ${s.Node}`}>
        {node.node}
      </div>
    ));
  }
  if (list.length === 0) {
    return <div className={s.FailureTitle}>No Failures</div>;
  }

  const click = (failure: HaltingFailure) => () => {
    dispatch(selectFailure(failure));
  };
  return (
    <div className={s.FailurePopup}>
      <div className={s.FailureTitle}>Failures</div>
      {children}
      <div className={s.Grid}>
        {list.map(failure => {
          const key = failure.affectedNodes.map(n => n.node).join(",");
          const selectedClass = failure === selectedFailure ? s.Selected : null;
          return (
            <div
              onClick={click(failure)}
              key={key}
              className={[s.FailureRow, selectedClass].join(" ")}
            >
              {nodeList(failure.vulnerableNodes)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FailureDisplay;
