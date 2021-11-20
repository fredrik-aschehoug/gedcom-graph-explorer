import { ElementsDefinition } from 'cytoscape';
import React, { useState } from 'react';
import { CytoGraph } from './CytoGraph';
import { FileUpload } from './FileUpload';
import { postJsonAsync } from './utils/client';

export const MainContent = () => {
  const [graph, setGraph] = useState<ElementsDefinition | null>(null);

  if (graph) {
    return <CytoGraph data={graph} />;
  }

  const onUpload = async (content: string) => {
    const payload = { data: content };
    const result = await postJsonAsync('ConvertGedcomToJson', payload);
    setGraph(result);
  };

  return <FileUpload onUpload={onUpload} />;
};
