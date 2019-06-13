import * as d3 from "d3";
import { GraphData, GraphNode, GraphLink } from "../GraphTypes";

const SimValues = {
  ManyBodyStrength: -700
};

const NodeStyles = {
  radius: 6,
  strokeWidth: 2,
  fill: (n: SimNode, i: number) => (n.active ? "#0f0" : "#555"),
  stroke: (d: SimNode, i: number) => {
    return i === 0 ? "green" : "white";
  }
};

const LinkStyles = {
  strokeWidth: (link: SimLink, i: number) => (link.active ? 2 : 0.2),
  stroke: (link: SimLink, i: number) => (link.active ? "#0f0" : "#333"),
  opacity: 1
};

interface SimNode extends d3.SimulationNodeDatum {
  x: number;
  y: number;
  fx?: number;
  fy?: number;
  id: string;
  active?: boolean;
  data: GraphNode;
}

interface SimLink extends d3.SimulationLinkDatum<SimNode> {
  active?: boolean;
}

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
      id: n.id,
      data: n
    };
  });

  const findTargets = (node: SimNode) => {
    return links.filter(link => {
      return link.source === node;
    });
  };

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
      if (d3.event.active) sim.alphaTarget(0.5);
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

  const labels = svg
    .append("g")
    .selectAll("text")
    .data<SimNode>(nodes)
    .join("text")
    .text(n => n.id)
    .attr("pointer-events", "none");

  const nodeGroup = svg
    .append("g")
    .selectAll<SVGElement, SimNode>("circle")
    .data<SimNode>(nodes)
    .join("g");

  nodeGroup
    .attr("transform", d => `translate(${d.x}, ${d.y})`)
    .call(drag(simulation))
    .append("circle")
    .attr("r", NodeStyles.radius)
    .attr("fill", NodeStyles.fill)
    .attr("stroke-width", NodeStyles.strokeWidth)
    .attr("stroke", NodeStyles.stroke);

  nodeGroup.on("mouseover", function(d) {
    if (this != null) {
      d3.select<SVGElement, SimNode>(this as SVGElement)
        .append("text")
        .text((d: SimNode) => d.id)
        .attr("transform", "translate(10,-10)");
    }
  });

  nodeGroup.on("mouseout", function(d) {
    d3.select(this)
      .select("text")
      .remove();
  });

  nodeGroup.on("mouseenter", node => {
    const links = findTargets(node);
    links.forEach(l => {
      l.active = true;
      (l.target as SimNode).active = true;
    });
  });

  nodeGroup.on("mouseleave", node => {
    links.forEach(l => (l.active = false));
    nodes.forEach(n => (n.active = false));
  });

  simulation.on("tick", () => {
    link
      .attr("x1", d => (d.source as SimNode).x)
      .attr("y1", d => (d.source as SimNode).y)
      .attr("x2", d => (d.target as SimNode).x)
      .attr("y2", d => (d.target as SimNode).y)
      .attr("stroke", LinkStyles.stroke)
      .attr("stroke-width", LinkStyles.strokeWidth);

    nodeGroup
      .attr("transform", d => `translate(${d.x}, ${d.y})`)
      .selectAll<SVGCircleElement, SimNode>("circle")
      .attr("fill", NodeStyles.fill);

    labels
      .attr("transform", d => `translate(${d.x + 10}, ${d.y - 10})`)
      .attr("visibility", n =>
        n.active || n.data.distance === 0 ? "visible" : "hidden"
      );
  });
};

export default ForceGraph;
