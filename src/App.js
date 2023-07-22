import "./App.css";
import { useState } from "react";

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const totalSolution = (string) => {
  const arrNum = string.split(/\D/g);
  const arrSym = string.split(/\d/g).filter((item) => item !== "");

  let result = +arrNum[0];

  for (let i = 0; i <= arrNum.length - 1; i++) {
    switch (arrSym[i]) {
      case "+":
        result = result + +arrNum[i + 1];
        break;
      case "-":
        result = result - +arrNum[i + 1];
        break;
      default:
        break;
    }
  }
  return result;
};

function App() {
  let [outPut, setOutPut] = useState("");

  return (
    <div className="App">
      <div className="wrapper">
        <div className="output">{outPut}</div>
        <div className="grid">
          {numArr.map((num) => (
            <div className="num" onClick={() => setOutPut(outPut + num)}>
              {num}
            </div>
          ))}
        </div>
        <div className="symbols">
          <div className="symbols-el" onClick={() => setOutPut(outPut + "+")}>
            +
          </div>
          <div className="symbols-el" onClick={() => setOutPut(outPut + "-")}>
            -
          </div>
          <div
            className="symbols-el"
            onClick={() => setOutPut(totalSolution(outPut))}
          >
            =
          </div>
          <div className="symbols-el" onClick={() => setOutPut((outPut = ""))}>
            C
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
