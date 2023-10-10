/* 
This function handles the math / logic associated with each button

Due to the large nature of this function, I moved it to a separate file so App.tsx is not so congested
*/

import { ButtonValue } from "./Buttons";

export const handleButtonClick = (button: ButtonValue):string => {
    console.log("HandleButtonClick function firing")
    switch (button) {
        case "AC":
            return "AC"
        case "()":
            return "()"
        case "%":
            return "%"
        case "/":
            return "/"
        case "7":
            return "7";
        case "8":
            return "8"
        case "9":
            return "9"
        case "X":
            return "X"
        case "4":
            return "4"
        case "5":
            return "5"
        case "6":
            return "6"
        case "-":
            return "-"
        case "1":
            return "1"
        case "2":
            return "2"
        case "3":
            return "3"
        case "+":
            return "+"
        case "0":
            return "0"
        case ".":
            return "."
        case "<-- Back": 
            return "back"
        case "=":
            return "="
        default:
            // Edge casing
            console.warn("Unhandled button value:", button);
            return "Error"
    }
}