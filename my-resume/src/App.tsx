import React from 'react';
// Components
import Welcome from './components/Welcome'
// Styles
import { GlobalStyle } from './app.styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Welcome />
    </>
  );
}

export default App;