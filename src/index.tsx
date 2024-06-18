// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import keycloak from './keycloak'; // Assuming this imports your Keycloak instance
// import { ReactKeycloakProvider } from '@react-keycloak/web';

// ReactDOM.render(
//   <ReactKeycloakProvider authClient={keycloak}>
//     <App />
//   </ReactKeycloakProvider>,
//   document.getElementById('root')
// );


// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import keycloak from './keycloak';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <ReactKeycloakProvider authClient={keycloak}>
      <App />
    </ReactKeycloakProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

