import * as d3 from "d3";
import { GraphData, GraphNode, GraphLink } from "../GraphTypes";

const SimValues = {
  ManyBodyStrength: -700
};

const NodeStyles = {
  radius: 6,
  strokeWidth: 2,
  fill: "#555",
  stroke: (d: SimNode, i: number) => {
    return i === 0 ? "green" : "white";
  }
};

const LinkStyles = {
  strokeWidth: 0.2,
  stroke: "#333",
  opacity: 0.5
};

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
    .force("charge", d3.forceManyBody().strength(SimValues.ManyBodyStrength))
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
    .selectAll("line")
    .data(links)
    .join("line")
    .attr("stroke", LinkStyles.stroke)
    .attr("stroke-opacity", LinkStyles.opacity)
    .attr("stroke-width", LinkStyles.strokeWidth);

  const node = svg
    .append("g")
    .selectAll<SVGElement, SimNode>("circle")
    .data<SimNode>(nodes)
    .join("g");
  const fixedDrag = drag(simulation);
  node
    .attr("transform", d => `translate(${d.x}, ${d.y})`)
    .call(fixedDrag)
    .append("circle")
    .attr("r", NodeStyles.radius)
    .attr("fill", NodeStyles.fill)
    .attr("stroke-width", NodeStyles.strokeWidth)
    .attr("stroke", NodeStyles.stroke);

  node.on("mouseover", function(d) {
    if (this != null) {
      d3.select<SVGElement, SimNode>(this as SVGElement)
        .append("text")
        .text((d: SimNode) => d.id)
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
