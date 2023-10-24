import React from 'react';

export type ButtonValue =
  | "AC"
  | "()" // Parentheses
  | "%" 
  | "/"
  | "7" | "8" | "9" | "X" // Updated for "X" as multiplication
  | "4" | "5" | "6" | "-"
  | "1" | "2" | "3" | "+"
  | "0" | "."
  | "<-- Back"
  | "="
  | "sin" | "cos" | "tan" // Trigonometric functions
  | "π" | "e" // Constants
  | "x^y" | "x^(1/n)" // Exponents and nth root
  | "log" | "ln" // Logarithmic functions
  | "n!" // Factorial
  | "MR" | "MC" | "M+" | "M-" // Memory functions
  | "xPn" | "nCr"; // Advanced operations

export type ButtonProps = {
  getButtonInput: (value: ButtonValue) => void;
};

const Buttons = ({ getButtonInput }: ButtonProps) => {
  return (
    <div className="buttons-container">
      {/* Top Row */}
      <button className="AC-button" value="AC" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>AC</button>
      <button value="/" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>/</button>
      <button value="7" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>7</button>
      <button value="8" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>8</button>
      <button value="9" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>9</button>
      <button value="X" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>X</button>

      {/* Second Row */}
      <button value="4" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>4</button>
      <button value="5" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>5</button>
      <button value="6" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>6</button>
      <button value="-" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>-</button>

      {/* Third Row */}
      <button value="1" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>1</button>
      <button value="2" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>2</button>
      <button value="3" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>3</button>
      <button value="+" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>+</button>

      {/* Fourth Row */}
      <button value="0" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>0</button>
      <button value="." onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>.</button>
      <button value="<-- Back" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>{"<-- Back"}</button>
      <button className="equal-button" value="=" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>=</button>

      {/* New Buttons: Trigonometric Functions, Constants, and More */}
      <button value="sin" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>sin</button>
      <button value="cos" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>cos</button>
      <button value="tan" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>tan</button>
      <button value="π" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>π</button>
      <button value="e" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>e</button>
      <button value="x^y" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>x^y</button>
      <button value="x^(1/n)" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>x^(1/n)</button>
      <button value="log" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>log</button>
      <button value="ln" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>ln</button>
      <button value="n!" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>n!</button>
      <button value="MR" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>MR</button>
      <button value="MC" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>MC</button>
      <button value="M+" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>M+</button>
      <button value="M-" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>M-</button>
      <button value="xPn" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>xPn</button>
      <button value="nCr" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>nCr</button>
    </div>
  );
};

export default Buttons;

