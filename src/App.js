import styles from "./App.module.css";
import { useState } from "react";

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const calculation = (string) => {
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
  let [showGreenText, setShowGreenText] = useState(false);

  const answerText = () => {
    setShowGreenText((showGreenText = true));
  };

  const normalText = () => {
    setShowGreenText((showGreenText = false));
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={showGreenText ? styles.outputGreen : styles.output}>
          {outPut}
        </div>
        <div className={styles.grid}>
          {numArr.map((num) => (
            <div
              className={styles.num}
              onClick={() => {
                setOutPut(outPut + num);
              }}
            >
              {num}
            </div>
          ))}
        </div>
        <div className={styles.symbols}>
          <div
            className={styles.symbolsEl}
            onClick={() => {
              setOutPut(outPut + "+");
              normalText();
            }}
          >
            +
          </div>
          <div
            className={styles.symbolsEl}
            onClick={() => {
              setOutPut(outPut + "-");
              normalText();
            }}
          >
            -
          </div>
          <div
            className={styles.symbolsEl}
            onClick={() => {
              setOutPut(calculation(outPut));
              answerText();
            }}
          >
            =
          </div>
          <div
            className={styles.symbolsEl}
            onClick={() => {
              setOutPut((outPut = ""));
              normalText();
            }}
          >
            C
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
