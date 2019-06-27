import React, { useRef, useEffect, useCallback } from "react";
import ForceGraph from "../d3/ForceGraph";
import "../d3/ForceGraph.css";
import { QuorumStateShape, fetchQuorum } from "../Modules/quorum";
import { useDispatch } from "redux-react-hook";
import { useMappedState } from "redux-react-hook";
import { GraphData } from "../Types/GraphTypes";
import { HaltingFailure } from "../util/HaltingAnalysis";

const NodeGraph = () => {
  const dispatch = useDispatch();
  // Trigger fetching of quorum data
  useEffect(() => {
    dispatch(fetchQuorum());
  }, [dispatch]);

  // Pull any quorum data out of our state
  const mapState = useCallback((state: { quorum: QuorumStateShape }) => {
    return {
      quorum: state.quorum.transitiveQuorum,
      failures: state.quorum.failures
    };
  }, []);
  const data = useMappedState<{
    quorum: GraphData;
    failures: HaltingFailure[];
  }>(mapState);

  // Update the svg with the new quorum state data
  const ref = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref && ref.current && containerRef.current) {
      ref.current.setAttribute(
        "width",
        containerRef.current.offsetWidth + "px"
      );
      ref.current.setAttribute(
        "height",
        containerRef.current.offsetHeight + "px"
      );

      ForceGraph(ref.current, data.quorum, data.failures[0]);
    }
  }, [ref, data]);

  return (
    <div style={{ height: "100%" }} ref={containerRef}>
      <svg width={640} height={480} ref={ref} />
    </div>
  );
};

export default NodeGraph;
