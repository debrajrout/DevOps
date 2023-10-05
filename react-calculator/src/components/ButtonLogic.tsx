/* 
This function handles the math / logic associated with each button

Due to the large nature of this function, I moved it to a separate file so App.tsx is not so congested
*/

import { ButtonValue } from "./Buttons";

export const handleButtonClick = (button: ButtonValue):string => {
    switch (button) {
        case "AC":
            //TODO: Logic for AC button
            return "dummy solution"
        case "()":
            //TODO: Logic for () button
            return "dummy solution"
        case "%":
            //TODO: Logic for % button
            return "dummy solution"
        case "/":
            //TODO: Logic for / button
            return "dummy solution"
        case "7":
            //TODO: Logic for 7 button
            return "dummy solution"
        case "8":
            //TODO: Logic for 8 button
            return "dummy solution"
        case "9":
            //TODO: Logic for 9 button
            return "dummy solution"
        case "X":
            //TODO: Logic for X button
            return "dummy solution"
        case "4":
            //TODO: Logic for 4 button
            return "dummy solution"
        case "5":
            //TODO: Logic for 5 button
            return "dummy solution"
        case "6":
            //TODO: Logic for 6 button
            return "dummy solution"
        case "-":
            //TODO: Logic for - button
            return "dummy solution"
        case "1":
            //TODO: Logic for 1 button
            return "dummy solution"
        case "2":
            //TODO: Logic for 2 button
            return "dummy solution"
        case "3":
            //TODO: Logic for 3 button
            return "dummy solution"
        case "+":
            //TODO: Logic for + button
            return "dummy solution"
        case "0":
            //TODO: Logic for 0 button
            return "dummy solution"
        case ".":
            //TODO: Logic for . button
            return "dummy solution"
        case "<-- Back":
            //TODO: Logic for <-- Back button
            return "dummy solution"
        case "=":
            //TODO: Logic for = button
            return "dummy solution"
        default:
            // Edge casing
            console.warn("Unhandled button value:", button);
            return "dummy solution"
    }
}