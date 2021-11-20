import React, { useEffect } from 'react';
import styled from 'styled-components';
import Cytoscape, { ElementsDefinition } from 'cytoscape';
import dagre from 'cytoscape-dagre';
import { cytoLayout, cytoStyles } from './cytoStyles';

const Wrapper = styled.div`
  background-color: white;
  height: 90%;
  width: 100%;
`;

const renderCy = (data: ElementsDefinition) => {
  Cytoscape.use(dagre);
  Cytoscape({
    container: document.getElementById('cy'), // container to render in
    elements: data,
    style: cytoStyles,
    layout: cytoLayout
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
