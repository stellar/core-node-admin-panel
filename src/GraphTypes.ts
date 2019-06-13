export interface GraphNode {
  id: string;
  distance: number;
}

export interface GraphLink {
  source: string;
  target: string;
}

export interface GraphData {
  links: GraphLink[];
  nodes: GraphNode[];
}
