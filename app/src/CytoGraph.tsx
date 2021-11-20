import React, { useEffect } from 'react';
import styled from 'styled-components';
import Cytoscape, { ElementsDefinition, LayoutOptions } from 'cytoscape';
import dagre from 'cytoscape-dagre';
import { theme } from './utils/theme';

const Wrapper = styled.div`
  background-color: white;
  height: 90%;
  width: 100%;
`;

const layout = {
  name: 'dagre',
  nodeDimensionsIncludeLabels: true
} as LayoutOptions;

const renderCy = (data: ElementsDefinition) => {
  Cytoscape.use(dagre);
  Cytoscape({
    container: document.getElementById('cy'), // container to render in

    elements: data,

    style: [ // the stylesheet for the graph
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
    ],

    layout

  });
};

export const CytoGraph = ({ data }: { data: ElementsDefinition }) => {
  useEffect(() => {
    renderCy(data);
  }, []);

  return (
    <Wrapper id="cy" />
  );
};
