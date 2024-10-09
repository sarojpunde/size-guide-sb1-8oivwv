import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from '@shopify/polaris';
import en from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/build/esm/styles.css';
import AppFrame from './components/AppFrame';

function App() {
  return (
    <AppProvider i18n={en}>
      <Router>
        <AppFrame />
      </Router>
    </AppProvider>
  );
}

export default App;