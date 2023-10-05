import React from 'react'

/*
* This component contains the code for all the buttons.

I understand that you can create the buttons with mapping through a 'buttons' object, but until we get this running I want to keep each individual button for easier styling and testing purposes.
*/

// Interface for the specific type of values that can be passed into the button props
export type ButtonValue = "AC" | "()" | "%" | "/" | "7" | "8" | "9" | "X" | "4" | "5" | "6" | "-" | "1" | "2" | "3" | "+" | "0" | "." | "<-- Back" | "=";

// Interface for the function that is passed down to the 
export type ButtonProps = {
    onButtonClick: (value: ButtonValue) => void;
}

const Buttons = ({onButtonClick: getButtonInput}: ButtonProps) => {
  return (
    <div className="buttons-container">
        {/* Top Row */}
        <button value="AC" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>AC</button>
        <button value="()" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>()</button>
        <button value="%" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>%</button>
        <button value="/" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>/</button>



        {/* Second Row */}
        <button value="7" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>7</button>
        <button value="8" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>8</button>
        <button value="9" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>9</button>
        <button value="X" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>X</button>



               {/* Third Row */}
        <button value="4" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>4</button>
        <button value="5" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>5</button>
        <button value="6" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>6</button>
        <button value="-" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>-</button>

        {/* Fourth Row */}
        <button value="1" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>1</button>
        <button value="2" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>2</button>
        <button value="3" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>3</button>
        <button value="+" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>+</button>

        {/* Fifth Row */}
        <button value="0" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>0</button>
        <button value="." onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>.</button>
        <button value="<-- Back" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>{"<-- Back"}</button>
        <button value="=" onClick={(e) => getButtonInput(e.currentTarget.value as ButtonValue)}>=</button>


    </div>
  )
}

export default Buttons