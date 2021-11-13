import React from 'react';
import ReactDOM from 'react-dom';
import { SWRConfig } from 'swr';
import { ThemeProvider } from 'styled-components';
import { App } from './App';
import { getJsonAsync } from './utils/client';
import reportWebVitals from './reportWebVitals';
import { theme } from './utils/theme';
import 'normalize.css';

const swrConfig = {
  fetcher: (path: string) => getJsonAsync(path)
};

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={swrConfig}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
