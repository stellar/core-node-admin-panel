import * as d3 from "d3";
import { GraphData, GraphNode, GraphLink } from "../GraphTypes";

// Strength of each body pushign against each other
const MANYBODY_STRENGTH = -700;
const DEFAULT_LINE_WIDTH = 0.2;

interface SimNode extends d3.SimulationNodeDatum {
  x: number;
  y: number;
  fx?: number;
  fy?: number;
  id: string;
}

interface SimLink extends d3.SimulationLinkDatum<SimNode> {}

const ForceGraph = (el: SVGSVGElement, data: GraphData) => {
  if (!data) return;
  const svg = d3.select(el);
  const w = parseInt(svg.attr("width"));
  const h = parseInt(svg.attr("height"));

  const links: SimLink[] = data.links.map((l: GraphLink) => {
    return {
      source: l.source,
      target: l.target
    };
  });
  const nodes: SimNode[] = data.nodes.map((n: GraphNode) => {
    return {
      x: w / 2 + Math.random() * 50 - 25,
      y: h / 2 + Math.random() * 50 - 25,
      id: n.id
    };
  });

  const simulation: d3.Simulation<SimNode, SimLink> = d3
    .forceSimulation(nodes)
    .force("link", d3.forceLink<SimNode, SimLink>(links).id(n => n.id))
    .force("charge", d3.forceManyBody().strength(MANYBODY_STRENGTH))
    .force("x", d3.forceX(w / 2))
    .force("y", d3.forceY(h / 2));

  const drag = (sim: d3.Simulation<SimNode, SimLink>) => {
    const dragStart = (d: SimNode, i: number) => {
      if (!d3.event.active) sim.alphaTarget(0.3).restart();
      d.fx = d.x; // fix position to mouse
      d.fy = d.y;
    };

    const dragged = (d: SimNode) => {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    };

    const dragEnd = (d: SimNode) => {
      if (d3.event.active) sim.alphaTarget(0);
      delete d.fx;
      delete d.fy;
    };

    return d3
      .drag<SVGElement, SimNode>()
      .on("start", dragStart)
      .on("drag", dragged)
      .on("end", dragEnd);
  };

  const link = svg
    .append("g")
    .attr("stroke", "#999")
    .attr("stroke-opacity", 0.6)
    .selectAll("line")
    .data(links)
    .join("line")
    .attr("stroke-width", DEFAULT_LINE_WIDTH);

  const node = svg
    .append("g")
    .attr("stroke", "#fff")
    .attr("stroke-width", 0.1)
    .selectAll<SVGElement, SimNode>("circle")
    .data<SimNode>(nodes)
    .join("g");
  const fixedDrag = drag(simulation);
  node
    .attr("transform", d => `translate(${d.x}, ${d.y})`)
    .call(fixedDrag)
    .append("circle")
    .attr("r", 6)
    .attr("fill", "#555")
    .attr("stroke-width", 3)
    .attr("stroke", (d, i) => (i === 0 ? "green" : "white"));

  node.on("mouseover", function(d) {
    if (this != null) {
      d3.select<SVGElement, SimNode>(this as SVGElement)
        .append("text")
        .text((d: SimNode) => d.id)
        .style("z-index", 1000)
        .attr("transform", "translate(10,-10)");
    }
  });

  node.on("mouseout", function(d) {
    d3.select(this)
      .select("text")
      .remove();
  });

  simulation.on("tick", () => {
    link
      .attr("x1", (d: SimLink) => (d.source as SimNode).x)
      .attr("y1", d => (d.source as SimNode).y)
      .attr("x2", d => (d.target as SimNode).x)
      .attr("y2", d => (d.target as SimNode).y);

    node.attr("transform", d => `translate(${d.x}, ${d.y})`);
  });
};

export default ForceGraph;
