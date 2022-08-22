import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(1);
  const [result, setResult] = useState();

  const validateInput = (number) => {
    const inputBox = document.getElementById('inputBox')
    let checkNumber = Number(number);
    if (isNaN(checkNumber)) {
      setValue(0);
      return inputBox.value = 0;
    } else if (checkNumber < 0) {
      setValue(1);
      return inputBox.value = 1;
    } else if (!Number.isInteger(checkNumber)) {
      setValue(Math.round(checkNumber));
      return inputBox.value = Math.round(checkNumber);
    } else {
      setValue(checkNumber);
      return inputBox.value = checkNumber;
    }
  };

  const selectCalculate = () => {
    if (document.getElementById("calculateType").value === "isFibonacci") {
      return isFibonacci();
    } else {
      return isPrime();
    }
  };

  const isPrime = () => {
    if (value === 2 || value === 3) {
      return setResult(true);
    }
    if (value <= 1 || value % 2 === 0 || value % 3 === 0) {
      return setResult(false);
    }
    for (let i = 5; i * i <= value; i += 6) {
      if (value % i === 0 || value % (i + 2) === 0) {
        return setResult(false);
      }
    }
    setResult(true);
  };

  const isFibonacci = () => {
    let a = 0;
    let b = 1;
    if (value === 0 || value === 1) {
      return setResult(true);
    }
    let c = a + b;
    while (c <= value) {
      if (c === value) {
        return setResult(true);
      }
      a = b;
      b = c;
      c = a + b;
    }
    setResult(false);
  };

  useEffect(() => {
    selectCalculate();
  },[value,result]);

  return (
    <div className="App" style={{ display: "flex", minHeight: "100vh" }}>
      <div className="column-1">
        <input
        id="inputBox"
          onBlur={(e) => {
            validateInput(e.target.value);
          }}
        />
      </div>
      <div className="column-2">
        <select
          onChange={selectCalculate}
          name="calculatefunction"
          id="calculateType"
        >
          <option value="isPrime">isPrime</option>
          <option value="isFibonacci">isFibonacci</option>
        </select>
      </div>
      <div className="column-3" style={{color: result ? "green" : "red"}}><div>{result ? "TRUE" : "FALSE"}</div></div>
    </div>
  );
}

export default App;
