import { useState } from "react";
import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";

const Calculator = () => {
  //store numbers and operations displayed on the screen
  const [screenDisplay, setScreenDisplay] = useState("");

  //store the operations clicked
  const [operation, setOperation] = useState("");

  //store the numbers clicked
  const [storedNumber, setStoredNumber] = useState(0);

  //handle the number clicked
  const handleNumberClick = (number) => {
    setScreenDisplay(`${screenDisplay}${number}`);
  };

  //handle the operation clicked
  const handleOperationClick = (operation) => {
    if (operation === "=") { performCalculation() }
    else if (operation === "clear") { clearCalculator() }
    else {
      setStoredNumber(parseFloat(screenDisplay))
      setOperation(operation)
    }
  };

  //enabling the calculator to perform calculations
  const performCalculation = () => {
    const latestNumber = parseFloat(screenDisplay);
    let result = 0;
    if (operation === "+") { result = storedNumber + latestNumber }
    else if (operation === "-") { result = storedNumber - latestNumber }
    else if (operation === "x") { result = storedNumber * latestNumber }
    else if (operation === "/") {
      if (latestNumber === 0) {
        setScreenDisplay("Error");
        return;
      }
      result = storedNumber / latestNumber
    }

    setScreenDisplay(result.toString());
  };

  //enable clear functionality
  const clearCalculator = () => {
    setScreenDisplay("")
    setOperation("")
    setStoredNumber(0)
  }

  return (
    <div>
      <Screen value={screenDisplay} />
      <div style={{ display: "flex" }}>
        <div>
          <Number value={0} onClick={handleNumberClick} />
          <Number value={1} onClick={handleNumberClick} />
          <Number value={2} onClick={handleNumberClick} />
          <Number value={3} onClick={handleNumberClick} />
          <Number value={4} onClick={handleNumberClick} />
          <Number value={5} onClick={handleNumberClick} />
          <Number value={6} onClick={handleNumberClick} />
          <Number value={7} onClick={handleNumberClick} />
          <Number value={8} onClick={handleNumberClick} />
          <Number value={9} onClick={handleNumberClick} />
        </div>
        <div style={{ paddingLeft: 10 }}>
          <Operation value="+" onClick={handleOperationClick} />
          <Operation value="/" onClick={handleOperationClick} />
          <Operation value="x" onClick={handleOperationClick} />
          <Operation value="-" onClick={handleOperationClick} />
          <Operation value="=" onClick={handleOperationClick} />
          <Operation value="clear" onClick={handleOperationClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
