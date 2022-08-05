import { useState } from "react";
import chris from "../public/chris.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(5300);

  return (
    <div className="App">
      <header className="App-header">
        <img src={chris} className="App-logo" alt="logo" />
        <p>Number of times that Chris da wah bitch</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
