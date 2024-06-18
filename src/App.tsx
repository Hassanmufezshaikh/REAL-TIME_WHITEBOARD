import React, { useEffect, useState } from 'react';
// import keycloak from './keycloak';
// import Whiteboard from './components/Whiteboard';
import { ImageUpload,Whiteboard } from './components';
import Footer from './containers/footer/Footer';
// import './App.css';
import './index.css';
import { Possibility } from './containers';
import Header from './containers/header/Header';

const App: React.FC = () => {
  const [keycloakReady, setKeycloakReady] = useState(false);

  // useEffect(() => {
  //   keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
  //     setKeycloakReady(true);
  //   }).catch(err => {
  //     console.error('Failed to initialize Keycloak', err);
  //   });
  // }, []);

  // if (!keycloakReady) return <div>Loading...</div>;

  return (
    <div>
    <Header /> 
      <ImageUpload />
      <Whiteboard />
      <Possibility />
      <Footer />

    </div>
  );
};

export default App;
