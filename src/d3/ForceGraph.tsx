import * as d3 from 'd3'
import { GraphData } from '../GraphTypes'

const ForceGraph = (el : SVGElement, data ?: GraphData) => {
    const svg = d3.select(el)
    svg.append('circle')
        .attr('r', 20)
        .attr('cx', 120)
        .attr('cy', 20)
        .attr('fill', 'red')
    svg.append('text')
        .text('Got d3 up and running')
        .attr('x', 5)
        .attr('y', 20)
}

export default ForceGraph