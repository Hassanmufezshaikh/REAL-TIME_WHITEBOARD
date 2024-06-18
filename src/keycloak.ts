import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080/',
  // url: 'http://localhost:8083/auth',
  realm: 'whiteboard-realm',
  clientId: 'whiteboard-client',
});

export default keycloak;


