// filepath: web-lab-hello/src/main.ts
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App'          // App.tsx kök dizinde ise ../App, src içindeyse './App'

ReactDOM
  .createRoot(document.getElementById('app')!) // match the div id in index.html
  // use createElement instead of JSX so this file can stay .ts
  .render(React.createElement(App))