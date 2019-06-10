import React, { useRef, useEffect } from 'react'
import { GraphData } from '../GraphTypes'
import ForceGraph from '../d3/ForceGraph'

interface NodeGraphProps {
    data ?: GraphData
}
const NodeGraph = (props : NodeGraphProps) => {
    const ref = useRef<SVGSVGElement>(null)
    useEffect(() => {
        if (ref && ref.current ) {
            ForceGraph(ref.current, props.data)
        }
    })
    return <div>
        <h1>Stellar Node Graph</h1>
        <svg ref={ref} />
    </div>
}

export default NodeGraph