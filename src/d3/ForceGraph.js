import * as d3 from 'd3'
import { GraphData } from '../GraphTypes'

const ForceGraph = (el, data) => {
    if (!data) return
    const svg = d3.select(el)
    const w = svg.attr('width')
    const h = svg.attr('height')
    const links = data.links.map(d => Object.create(d));

    const nodes = data.nodes.map(d => Object.create(d));
    nodes.forEach(n => {
        n.x = w / 2 + Math.random() * 50 - 25
        n.y = h / 2 + Math.random() * 50 - 25
    })
    const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.id))
        .force("charge", d3.forceManyBody().strength(-700))
        .force("x", d3.forceX(svg.attr('width') / 2))
        .force("y", d3.forceY(svg.attr('height') / 2))


    const drag = simulation => {
        const dragStart = d => {
            if (!d3.event.active) simulation.alphaTarget(0.3).restart()
            d.fx = d.x // fix position to mouse
            d.fy = d.y
        }

        const dragged = d => {
            d.fx = d3.event.x
            d.fy = d3.event.y
        }

        const dragEnd = d => {
            if (d3.event.active) simulation.alphaTarget(0)
            d.fx = null
            d.fy = null
        }

        return d3.drag()
            .on('start', dragStart)
            .on('drag', dragged)
            .on('end', dragEnd)
    }
    

    const link = svg.append("g")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line")
        .attr("stroke-width", d => Math.sqrt(d.value))

    const node = svg.append("g")
        .attr("stroke", "#fff")
        .attr("stroke-width", 0.1)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
        .attr("r", 6)
        .attr("fill", "#555")
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .call(drag(simulation))


    
    simulation.on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);
    
        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);
        });

    console.log("Should start??", data)

}

export default ForceGraph