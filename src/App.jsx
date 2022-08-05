import { useState } from "react";
import chris from "../public/chris.jpg";
import "./App.css";
import theNew5000 from "../public/the-new-5000.mp3";

function App() {
  const [count, setCount] = useState(0);

  const audio = new Audio(theNew5000);

  const start = () => {
    audio.play();
    setCount((count) => count + 5000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={chris} className="App-logo" alt="logo" />
        <p>Number of times that Chris da wah bitch</p>
        <p>
          <button type="button" onClick={start}>
            Click to find out: {count}
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
