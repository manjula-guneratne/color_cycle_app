import "./App.css";
import { useState, useEffect } from "react";

function App() {
  // For the timer
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const [colorValue, setColorValue] = useState({
    firstColorValues: "00",
    secondColorValues: "00",
    thirdColorValues: "00",
    colorIncRate: "10", //SETTING the default colour incremental rate
    colorChangeRate: "1000", //SETTING the default colour Changing rate
  });

  const getInputValue = (e) => {
    const value = e.target.value;
    setColorValue({
      ...colorValue,
      [e.target.name]: value,
    });
  };

  let handleClick = () => {
    console.log(`ALL THE VALUESS...... 
    firstColorValues: + ${colorValue.firstColorValues}
    secondColorValues: + ${colorValue.secondColorValues}
    thirdColorValues: + ${colorValue.thirdColorValues}
    colorIncRate: + ${colorValue.colorIncRate}
    colorChangeRate: + ${colorValue.colorChangeRate}`);

    // This is the timer stuff

    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }

    const newInteralId = setInterval(() => {
      setCount((prevCount) => prevCount + parseInt(colorValue.colorIncRate));
    }, colorValue.colorChangeRate);
    setIntervalId(newInteralId);
  };

  return (
    <div className="flex-container">
      <div className="flex-left">
        <div>
          <h5>The component has been rendered for {count} seconds</h5>
        </div>
        <h2>Colour Cycle App</h2>
        <p className="box"></p>
      </div>
      <div className="flex-right">
        <h4>Starting Hex color breakdown</h4>
        <span className="right_lable">No.1 and 2 </span>
        <input
          type="text"
          placeholder="##"
          maxLength={2}
          name="firstColorValues"
          value={colorValue.firstColorValues}
          onChange={getInputValue}
        ></input>
        <br />
        <span className="right_lable">No.3 and 4 </span>
        <input
          type="text"
          placeholder="##"
          maxLength={2}
          name="secondColorValues"
          value={colorValue.secondColorValues}
          onChange={getInputValue}
        ></input>
        <br />
        <span className="right_lable">No.5 and 6 </span>
        <input
          type="text"
          placeholder="##"
          maxLength={2}
          name="thirdColorValues"
          value={colorValue.thirdColorValues}
          onChange={getInputValue}
        ></input>
        <br />
        <br />
        <span className="right_lable">Hex color inc. rate/sec </span>
        <input
          type="text"
          placeholder="#######"
          name="colorIncRate"
          value={colorValue.colorIncRate}
          onChange={getInputValue}
        ></input>
        <br />
        <span className="right_lable">Hex color changing rate/sec </span>
        <input
          type="text"
          placeholder="#######"
          name="colorChangeRate"
          value={colorValue.colorChangeRate}
          onChange={getInputValue}
        ></input>
        <br />
        <br />
        <button onClick={handleClick}>{intervalId ? "Stop" : "Start"}</button>
      </div>
    </div>
  );
}

export default App;
