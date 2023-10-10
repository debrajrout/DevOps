import { ButtonValue } from "./Buttons";


export const handleButtonLogic = (currentState: string[], buttonValue: ButtonValue): string[] => {
    console.log('Handling button:', buttonValue);

    // If AC button is clicked, reset the state
    if (buttonValue === 'AC') {
        return [];
    }

    // Continue with the existing logic for other buttons
    const updatedState = [...currentState];

    if (buttonValue === '=') {
        return [evaluateSequence(updatedState).toString()];
    }

    if (buttonValue === '.') {
        console.log("Hitting the '.' of the handleButtonLogic")
        // If the last entry is a number and does not contain a dot yet
        if (/^[0-9]+$/.test(updatedState[updatedState.length - 1])) {
            updatedState[updatedState.length - 1] += '.';
            console.log("the updated state is", updatedState)
        }
        // If the last entry is not a number or there's no last entry
        else {
            updatedState.push('0.');
        }
    }

    console.log('New state after handling:', updatedState);
    
    if (/^[0-9]$/.test(buttonValue)) {
        if (/^[0-9.]+$/.test(updatedState[updatedState.length - 1])) {
            updatedState[updatedState.length - 1] += buttonValue;
        } else {
            updatedState.push(buttonValue);
        }
    } else if (['+', '-', '*', '/'].includes(buttonValue)) {
        updatedState.push(buttonValue);
    }

    return updatedState;
}




const evaluateSequence = (sequence: string[]): number => {
    let result = parseFloat(sequence[0]);
    
    for (let i = 1; i < sequence.length; i += 2) {
        const operator = sequence[i];
        const nextNum = parseFloat(sequence[i + 1]);
        
        switch (operator) {
            case '+':
                result += nextNum;
                break;
            case '-':
                result -= nextNum;
                break;
            case '*':
                result *= nextNum;
                break;
            case '/':
                if (nextNum !== 0) {
                    result /= nextNum;
                } else {
                    console.error('Division by zero!');
                    return 0;  // Handle division by zero
                }
                break;
            default:
                console.warn('Unhandled operator:', operator);
                break;
        }
    }
    
    return result;
}
