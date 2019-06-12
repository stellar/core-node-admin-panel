import React, { useRef, useEffect } from "react";
import ForceGraph from "../d3/ForceGraph";
import dummydata from "../dummydata";

const NodeGraph = () => {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (ref && ref.current) {
      ForceGraph(ref.current, dummydata);
    }
  });
  return (
    <div>
      <h1>Stellar Node Graph</h1>
      <svg width={640} height={480} ref={ref} />
    </div>
  );
};

export default NodeGraph;
