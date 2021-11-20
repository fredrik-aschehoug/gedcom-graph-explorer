import React from 'react';
import styled from 'styled-components';
import { MainContent } from './MainContent';

const Page = styled.div`
  background-color: ${props => props.theme.color.raisinBlack};
  height: 100vh;
`;

const Navbar = styled.nav`
  background-color: ${props => props.theme.color.raisinBlack};
  color: ${props => props.theme.color.mintCream};
  padding: 20px;
  font-size: ${props => props.theme.fontSize.medium};
`;

export const App = () => (
  <Page>
    <Navbar>GEDCOM Graph Explorer</Navbar>
    <MainContent />
  </Page>
);
