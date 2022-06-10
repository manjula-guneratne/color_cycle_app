import "./App.css";

function App() {
  return (
    <div className="flex-container">
      <div className="flex-left">
        <h2>Colour Cycle App</h2>
        <p className="box"></p>
      </div>
      <div className="flex-right">
        <h3>Starting Hex color breakdown</h3>
        <span className="right_lable">No.1 and 2 </span>
        <input type="text" placeholder="##" maxLength={2}></input>
        <br />
        <span className="right_lable">No.3 and 4 </span>
        <input type="text" placeholder="##" maxLength={2}></input>
        <br />
        <span className="right_lable">No.5 and 6 </span>
        <input type="text" placeholder="##" maxLength={2}></input>
        <br />
        <span className="right_lable">Hex color inc. rate </span>
        <input type="text" placeholder="#######"></input>
        <br />
        <span className="right_lable">Hex color changing rate </span>
        <input type="text" placeholder="#######"></input>
        <br />
        <button>Start / Stop</button>
      </div>
    </div>
  );
}

export default App;
