import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;

}

:root {
  --blue: #1362ae;
  --lightBlue: #cde1f9;
  --darkBlue: #093e61;
  --white: #fff;
  --darkDarkBlue: #212529;
  --black: #1d1d1b;  
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      <App />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
