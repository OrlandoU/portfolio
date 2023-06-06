import React from 'react';
import ReactDOM, { Root } from 'react-dom/client';
import './styles/index.css';
import App from './components/App';

const rootElement: HTMLElement | null = document.getElementById('root')
const root: Root = ReactDOM.createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
