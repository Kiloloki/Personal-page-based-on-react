import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { createGlobalStyle } from 'styled-components';

// GlobalStyle --> define essential global styles to handles global styles without the reputation coding
const GlobalStyles = createGlobalStyle`
    body {
        /* font-family: "Open Sans", sans-serif;  */
        font-family: "monospace", monospace;/* to style the world */
        margin: 0;
        min-height: 100vh; /* Ensure the body covers the full viewport height */
        background: linear-gradient(135deg, #6152b6, #2575fc); /* Gradient background，refer by https://www.w3schools.com/css/css3_gradients.asp */
        display: flex; /* Enable flexbox layout for vertical alignment */
        flex-direction: column;
        align-items: center; /* Center content horizontally */
        color: #ffffff;
        overflow-x: hidden; /* Prevent horizontal overflow to avoid the ugly color box appear during moving, refer by https://www.w3schools.com/cssref/css3_pr_overflow-x.php*/
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
