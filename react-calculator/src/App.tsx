import './App.css';
import Layout from './components/Layout';
import Buttons from './components/Buttons';
import { useState } from 'react';
import Display from './components/Display';
import { handleButtonClick } from './components/ButtonLogic';
import { ButtonValue } from "./components/Buttons";


/* 
1) The App.tsx component will house the logic for the entire calculator application. State will be passed up to App.tsx from the respective component through a callback function (see 'getButtonInput' as an example) 

2) For development purposes, write all your interfaces / types in the specific component. Only once we get this running will we add these to their own separate 'interface-types.tsx' folder
*/


function App() {
  // Logic for buttons (arithmetic operations, back and symbolic (such as '.' and '=') operations )
    // Was thinking a switch statement for the buttons pushed

  // Callback function to get the button click form 'Buttons' for arithmetic and displaying purposes
  const getButtonInput = (value: ButtonValue) => {
    const result = handleButtonClick(value);
    setDisplayValue(result);
}


  // State for button selected
  const [displayValue, setDisplayValue] = useState("");



  return (
    <div className="App">
      <h1>React Calculator: Made with TypeScript</h1>
      <Layout>
        <p>Test Test?</p>
        <Display value={displayValue} />
        <Buttons getButtonInput={getButtonInput} />
      

      </Layout  >
    </div>
  );
}

export default App;
