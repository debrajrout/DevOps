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

    if (buttonValue === '<-- Back') {
        // If the last entry is a number and has more than one digit, remove the last digit
        if (/^[0-9.]+$/.test(updatedState[updatedState.length - 1]) && updatedState[updatedState.length - 1].length > 1) {
            updatedState[updatedState.length - 1] = updatedState[updatedState.length - 1].slice(0, -1);
        } else {
            // Otherwise, remove the last entry entirely
            updatedState.pop();
        }
    }

    if (buttonValue === '.') {
        console.log("Hitting the '.' of the handleButtonLogic");
        // If the last entry is a number and does not contain a dot yet
        if (/^[0-9]+$/.test(updatedState[updatedState.length - 1])) {
            updatedState[updatedState.length - 1] += '.';
            console.log("the updated state is", updatedState);
        }
        // If the last entry is not a number or there's no last entry
        else {
            updatedState.push('0.');
        }
    }

    console.log('New state after handling:', updatedState);

    if (/^[0-9]$/.test(buttonValue) || ['pi', 'e'].includes(buttonValue)) {
        if (/^[0-9.]+$/.test(updatedState[updatedState.length - 1])) {
            updatedState[updatedState.length - 1] += buttonValue;
        } else {
            updatedState.push(buttonValue);
        }
    } else if (['+', '-', '*', '/', 'sin', 'cos', 'tan', 'log', 'ln', 'sqrt'].includes(buttonValue)) {
        updatedState.push(buttonValue);
    }

    return updatedState;
};

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
                    return 0; // Handle division by zero
                }
                break;
            case 'sin':
                result = Math.sin(nextNum);
                break;
            case 'cos':
                result = Math.cos(nextNum);
                break;
            case 'tan':
                result = Math.tan(nextNum);
                break;
            case 'log':
                result = Math.log10(nextNum);
                break;
            case 'ln':
                result = Math.log(nextNum);
                break;
            case 'sqrt':
                result = Math.sqrt(nextNum);
                break;
            case 'pi':
                result = Math.PI;
                break;
            case 'e':
                result = Math.E;
                break;
            default:
                console.warn('Unhandled operator:', operator);
                break;
        }
    }

    return result;
};
