
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

