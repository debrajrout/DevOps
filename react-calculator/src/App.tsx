import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Buttons from './components/Buttons';

function App() {
  return (
    <div className="App">
      <h1>React Calculator: Made with TypeScript</h1>
      <Layout>
        <p>Test Test?</p>
        <Buttons />

      </Layout>
    </div>
  );
}

export default App;
