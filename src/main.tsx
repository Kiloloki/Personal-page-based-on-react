import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { createGlobalStyle } from 'styled-components';

// GlobalStyle
const GlobalStyles = createGlobalStyle`
  body {
    font-family: "monospace", monospace;
    margin: 0;
    min-height: 100vh;
    background: linear-gradient(135deg, #6152b6, #2575fc);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    overflow-x: hidden;
  }

  a {
    color: #ffffff;
  }

  img {
    max-width: 80%;
    height: auto;
  }
`;

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GlobalStyles />
        <App />
    </StrictMode>
);
