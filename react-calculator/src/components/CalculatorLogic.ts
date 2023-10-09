import { ButtonValue } from "./Buttons";

export const handleButtonLogic = (currentState: string[], buttonValue: ButtonValue): string[] => {
    // Create a copy of the current state so we don't modify it directly
    let newState = [...currentState];

    if (buttonValue === '=') {
        // Evaluate based on the sequence in currentState
        return [evaluateSequence(newState).toString()];
    }
    
    if (/^[0-9]$/.test(buttonValue)) {
        // If the last entry is a number, append this number to it
        if (/^[0-9]+$/.test(newState[newState.length - 1])) {
            newState[newState.length - 1] += buttonValue;
        } else {
            newState.push(buttonValue);
        }
    } else if (['+'].includes(buttonValue)) {
        newState.push(buttonValue);
    }

    return newState;
}

const evaluateSequence = (sequence: string[]): number => {
    let result = parseFloat(sequence[0]);
    
    for (let i = 1; i < sequence.length; i += 2) {
        const operator = sequence[i];
        const nextNum = parseFloat(sequence[i + 1]);
        
        if (operator === '+') {
            result += nextNum;
        }
    }
    
    return result;
}
