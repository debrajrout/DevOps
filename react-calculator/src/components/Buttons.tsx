import React from 'react';

export type ButtonValue =
  | "AC"
  | "()" // Parentheses
  | "%"
  | "/"
  | "7"
  | "8"
  | "9"
  | "X" // Multiplication
  | "4"
  | "5"
  | "6"
  | "-"
  | "1"
  | "2"
  | "3"
  | "+"
  | "0"
  | "."
  | "<-- Back"
  | "="
  | "sin"
  | "cos"
  | "tan"
  | "log"
  | "ln"
  | "sqrt"
  | "e"
  | "pi";

export type ButtonProps = {
  getButtonInput: (value: ButtonValue) => void;
};

const Buttons = ({ getButtonInput }: ButtonProps) => {
  return (
    <div className="buttons-container">
      {/* Top Row */}
      <button
        className="AC-button"
        value="AC"
        onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}
      >
        AC
      </button>
      <button
        value="/"
        onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}
      >
        /
      </button>

      {/* Second Row */}
      <button
        value="7"
        onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}
      >
        7
      </button>
      <button
        value="8"
        onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}
      >
        8
      </button>
      <button
        value="9"
        onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}
      >
        9
      </button>
      <button
        value="X"
        onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}
      >
        X
      </button>

      {/* Third Row */}
      <button
        value="4"
        onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}
      >
        4
      </button>
      <button
        value="5"
        onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}
      >
        5
      </button>
      <button
        value="6"
        onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}
      >
        6
      </button>
      <button
        value="-"
        onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}
      >
        -
      </button>

      {/* Fourth Row */}
      <button
        value="1"
        onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}
      >
        1
      </button>
      <button
        value="2"
        onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}
      >
        2
      </button>
      <button
        value="3"
        onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}
      >
        3
      </button>
      <button
        value="+"
        onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}
      >
        +
      </button>

      {/* Fifth Row */}
      <button
        value="0"
        onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}
      >
        0
      </button>
      <button
        value="."
        onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}
      >
        .
      </button>
      <button
        value="<-- Back"
        onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}
      >
        {"<-- Back"}
      </button>
      <button
        className="equal-button"
        value="="
        onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}
      >
        =
      </button>

      {/* Scientific Functions and Constants */}
      <button
        value="sin"
        onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}
      >
        sin
      </button>
      <button
        value="cos"
        onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}
      >
        cos
      </button>
      <button
        value="tan"
        onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}
      >
        tan
      </button>
      <button
        value="log"
        onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}
      >
        log
      </button>
      <button
        value="ln"
        onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}
      >
        ln
      </button>
      <button
        value="sqrt"
        onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}
      >
        √
      </button>
      <button
        value="e"
        onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}
      >
        e
      </button>
      <button
        value="pi"
        onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}
      >
        π
      </button>
    </div>
  );
};

export default Buttons;
