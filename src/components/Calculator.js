import { useState } from "react";
import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";
import './Calculator.css';

const Calculator = () => {
  //store numbers and operations displayed on the screen
  const [screenDisplay, setScreenDisplay] = useState("");

  //store the operations clicked
  const [operation, setOperation] = useState("");

  //store the numbers clicked
  const [storedNumber, setStoredNumber] = useState("");

  //parse screenDisplay and storedNumber into numbers
  const latestNumber = parseFloat(screenDisplay);
  const previousNumber = parseFloat(storedNumber);

  //handle the number clicked
  const handleNumberClick = (number) => {
    setScreenDisplay(`${screenDisplay}${number}`);
  };

  //handle the operation clicked
  const handleOperationClick = (operation) => {
    if (operation === "=") { performCalculation(); }
    else if (operation === "clear") { clearCalculator(); }
    else {
      setStoredNumber(screenDisplay);
      setOperation(operation);
      setScreenDisplay("");
    }
  };

  //enabling the calculator to perform calculations
  const performCalculation = () => {
    let result = 0;

    if (operation === "+") { result = previousNumber + latestNumber; }
    else if (operation === "-") { result = previousNumber - latestNumber; }
    else if (operation === "x") { result = previousNumber * latestNumber; }
    else if (operation === "/") {
      if (latestNumber === 0) {
        setScreenDisplay("error");
        return;
      }
      result = previousNumber / latestNumber;
    }
    //display calculation result and reset 
    setScreenDisplay(result.toString());
    setOperation("");
    setStoredNumber("");
  };

  //enable clear functionality
  const clearCalculator = () => {
    setScreenDisplay("");
    setOperation("");
    setStoredNumber("");
  };

  return (
    <div className="calculator">
      <Screen value={screenDisplay} />
      <div>
          <div className="stack">
          <Number value={7} onClick={handleNumberClick} />
          <Number value={8} onClick={handleNumberClick} />
          <Number value={9} onClick={handleNumberClick} />
          <Operation value="+" onClick={handleOperationClick} />
          </div>
          <div className="stack">
          <Number value={4} onClick={handleNumberClick} />
          <Number value={5} onClick={handleNumberClick} />
          <Number value={6} onClick={handleNumberClick} />
          <Operation value="-" onClick={handleOperationClick} />
          </div>
          <div className="stack">
          <Number value={1} onClick={handleNumberClick} />
          <Number value={2} onClick={handleNumberClick} />
          <Number value={3} onClick={handleNumberClick} />
          <Operation value="x" onClick={handleOperationClick} />
          </div>
          <div className="stack">
          <Operation value="C" onClick={handleOperationClick} />
          <Number value={0} onClick={handleNumberClick} />
          <Operation value="=" onClick={handleOperationClick} />
          <Operation value="/" onClick={handleOperationClick} />
          </div>
      </div>
    </div>
  );
};

export default Calculator;
