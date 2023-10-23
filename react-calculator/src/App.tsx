import React from 'react';
import './App.css';
import Layout from './components/Layout';
import Buttons from './components/Buttons';
import { useState } from 'react';
import Display from './components/Display';
import { ButtonValue } from "./components/Buttons";
import { handleButtonLogic } from './components/CalculatorLogic';
import { useEffect } from 'react';

function App() {
  const getButtonInput = (value: ButtonValue) => {
    console.log('getButtonInput triggered with value:', value);
    const updatedDisplay = handleButtonLogic(displayValue, value);
    console.log('Updated display:', updatedDisplay);
    setDisplayValue(updatedDisplay);
  }

  // State for button selected
  const [displayValue, setDisplayValue] = useState<string[]>([]);

  useEffect(() => {
    console.log("displayValue has been updated:", displayValue);
  }, [displayValue]);

  return (
    <div className="App">
      <h1>React Calculator: Made with TypeScript</h1>
      <Layout>
        <Display value={displayValue.join(' ')} />
        <Buttons getButtonInput={getButtonInput} />
      </Layout>
    </div>
  );
}

export default App;
