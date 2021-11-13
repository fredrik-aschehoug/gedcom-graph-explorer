import React, { useEffect } from 'react';
import styled from 'styled-components';
import Cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';
import { theme } from './utils/theme';

const elements = [
  { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
  { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
  { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
];

const Warpper = styled.div`
  background-color: white;
  height: 90%;
  width: 100%;
`;

const renderCy = data => {
  Cytoscape.use(dagre);
  const cy = Cytoscape({
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

    layout: {
      name: 'dagre',
      nodeDimensionsIncludeLabels: true
    }

  });
};

const getLocalData = async () => {
  const response = await fetch('output_fredrik.json');
  if (response.ok) { // if HTTP-status is 200-299
    // get the response body (the method explained below)
    const json = await response.json();
    return json;
  }
  return null;
};

export const CytoTest = () => {
  useEffect(() => {
    const data = getLocalData();
    renderCy(data);
  }, []);
  return (
    <Warpper id="cy" />
  );
};
