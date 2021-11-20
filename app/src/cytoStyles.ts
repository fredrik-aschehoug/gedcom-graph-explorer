import { LayoutOptions, Stylesheet } from 'cytoscape';
import { theme } from './utils/theme';

export const cytoStyles = [ // the stylesheet for the graph
  {
    selector: 'node',
    style: {
      'background-color': '#666',
      label: 'data(label)',
      'text-wrap': 'wrap'
    }
  },
  {
    selector: 'node[sex = "M"]',
    style: {
      'background-color': theme.color.cyanProcess
    }
  },
  {
    selector: 'node[sex = "F"]',
    style: {
      'background-color': theme.color.salmonPink
    }
  },

  {
    selector: 'edge',
    style: {
      width: 3,
      'line-color': '#ccc',
      'target-arrow-color': '#ccc',
      'target-arrow-shape': 'triangle',
      'curve-style': 'bezier'
    }
  }
] as Stylesheet[];

export const cytoLayout = {
  name: 'dagre',
  nodeDimensionsIncludeLabels: true
} as LayoutOptions;
