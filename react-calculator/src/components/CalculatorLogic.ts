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
    const stack: number[] = [];
    const operatorStack: string[] = [];
  
    for (const token of sequence) {
        if (/^[0-9.]+$/.test(token)) {
            stack.push(parseFloat(token));
        } else if (token === 'sin') {
            if (stack.length >= 1) {
                const value = stack.pop();
                if (typeof value === 'number') {
                    stack.push(Math.sin(value));
                }
            }
        } else if (token === 'cos') {
            if (stack.length >= 1) {
                const value = stack.pop();
                if (typeof value === 'number') {
                    stack.push(Math.cos(value));
                }
            }
        } else if (token === 'tan') {
            if (stack.length >= 1) {
                const value = stack.pop();
                if (typeof value === 'number') {
                    stack.push(Math.tan(value));
                }
            }
        } else if (token === 'log') {
            if (stack.length >= 1) {
                const value = stack.pop();
                if (typeof value === 'number' && value > 0) {
                    stack.push(Math.log10(value));
                }
            }
        } else if (token === 'ln') {
            if (stack.length >= 1) {
                const value = stack.pop();
                if (typeof value === 'number' && value > 0) {
                    stack.push(Math.log(value));
                }
            }
        } else if (token === '+') {
            operatorStack.push(token);
        } else if (token === '-') {
            operatorStack.push(token);
        } else if (token === '*') {
            operatorStack.push(token);
        } else if (token === '/') {
            operatorStack.push(token);
        }
    }
  
    while (operatorStack.length > 0) {
        const operator = operatorStack.pop();
        const rightOperand = stack.pop();
        const leftOperand = stack.pop();
  
        if (typeof leftOperand === 'number' && typeof rightOperand === 'number') {
            if (operator === '+') {
                stack.push(leftOperand + rightOperand);
            } else if (operator === '-') {
                stack.push(leftOperand - rightOperand);
            } else if (operator === '*') {
                stack.push(leftOperand * rightOperand);
            } else if (operator === '/') {
                if (rightOperand !== 0) {
                    stack.push(leftOperand / rightOperand);
                } else {
                    console.error('Division by zero!');
                    return 0; // Handle division by zero
                }
            }
        }
    }
  
    if (stack.length === 1) {
        return stack[0];
    }
  
    return 0; // Handle any other errors
};
