import React, { useCallback, useState, FunctionComponent } from "react";

import { HaltingFailure } from "../util/HaltingAnalysis";
import { useMappedState } from "redux-react-hook";
import s from "./FailureDisplay.module.css";

import { NetworkGraphNode } from "../Types/NetworkTypes";

const FailureDisplay: FunctionComponent = ({ children }) => {
  // Pull any quorum data out of our state
  const mapState = useCallback(state => {
    return state.quorum.failures;
  }, []);
  const list = useMappedState<HaltingFailure[]>(mapState);

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
  return (
    <>
      <div className={s.FailureTitle}>Failures</div>
      {children}
      <div className={s.Grid}>
        {list.map(failure => {
          const key = failure.affectedNodes.map(n => n.node).join(",");
          return (
            <div key={key} className={s.FailureRow}>
              {nodeList(failure.vulnerableNodes)}
            </div>
          );
        })}
      </div>
    </>
  );
};

/* <details>
                <summary>Affected Nodes</summary>
                {failure.affectedNodes.map(node => (
                  <div className={`${s.AffectedNode} ${s.Node}`}>
                    {node.node}
                  </div>
                ))}
              </details> */

export default FailureDisplay;
