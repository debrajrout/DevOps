/* 
This function handles the math / logic associated with each button

Due to the large nature of this function, I moved it to a separate file so App.tsx is not so congested
*/

// ButtonLogic.tsx
// ButtonLogic.tsx
import { ButtonValue as ImportedButtonValue } from "./Buttons";

export enum ButtonValue {
  AC = "AC",
  Parentheses = "()",
  Percent = "%",
  Divide = "/",
  Seven = "7",
  Eight = "8",
  Nine = "9",
  Multiply = "X",
  Four = "4",
  Five = "5",
  Six = "6",
  Minus = "-",
  One = "1",
  Two = "2",
  Three = "3",
  Plus = "+",
  Zero = "0",
  Decimal = ".",
  Back = "<-- Back",
  Equals = "=",
  Sin = "sin",
  Cos = "cos",
  Tan = "tan",
  Log = "log",
  Ln = "ln",
  Sqrt = "sqrt",
  E = "e",
  Pi = "π",
}

export const handleButtonClick = (button: ButtonValue): string => {
  switch (button) {
    case ButtonValue.AC:
      return "AC";
    case ButtonValue.Parentheses:
      return "()";
    case ButtonValue.Percent:
      return "%";
    case ButtonValue.Divide:
      return "/";
    case ButtonValue.Seven:
      return "7";
    case ButtonValue.Eight:
      return "8";
    case ButtonValue.Nine:
      return "9";
    case ButtonValue.Multiply:
      return "X";
    case ButtonValue.Four:
      return "4";
    case ButtonValue.Five:
      return "5";
    case ButtonValue.Six:
      return "6";
    case ButtonValue.Minus:
      return "-";
    case ButtonValue.One:
      return "1";
    case ButtonValue.Two:
      return "2";
    case ButtonValue.Three:
      return "3";
    case ButtonValue.Plus:
      return "+";
    case ButtonValue.Zero:
      return "0";
    case ButtonValue.Decimal:
      return ".";
    case ButtonValue.Back:
      return "back";
    case ButtonValue.Equals:
      return "=";

    // Scientific Functions and Constants
    case ButtonValue.Sin:
      return "sin(";
    case ButtonValue.Cos:
      return "cos(";
    case ButtonValue.Tan:
      return "tan(";
    case ButtonValue.Log:
      return "log(";
    case ButtonValue.Ln:
      return "ln(";
    case ButtonValue.Sqrt:
      return "sqrt(";
    case ButtonValue.E:
      return "e";
    case ButtonValue.Pi:
      return "π";

    default:
      // Edge casing
      console.warn("Unhandled button value:", button);
      return "Error";
  }
};
