import React, { useRef, useEffect, useCallback } from "react";
import ForceGraph from "../d3/ForceGraph";

import { fetchQuorum } from "../Modules/quorum";
import { useDispatch } from "redux-react-hook";
import { useMappedState } from "redux-react-hook";

const NodeGraph = () => {
  const dispatch = useDispatch();
  // Trigger fetching of quorum data
  useEffect(() => {
    dispatch(fetchQuorum());
  }, []);

  // Pull any quorum data out of our state
  const mapState = useCallback(state => {
    return state.quorum.transitiveQuorum;
  }, []);
  const data = useMappedState(mapState);

  // Update the svg with the new quorum state data
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (ref && ref.current) {
      ForceGraph(ref.current, data);
    }
  }, [ref, data]);

  return (
    <div>
      <h1>Stellar Node Graph</h1>
      <svg width={640} height={480} ref={ref} />
    </div>
  );
};

export default NodeGraph;
