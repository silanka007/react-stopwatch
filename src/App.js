import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [timer, setTimer] = useState(0);
  const [isTiming, setIsTiming] = useState(0);

  useEffect(() => {
    let interval;
    if (isTiming) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isTiming]);

  return (
    <div className="App">
      <div className="App-header">
        <div>
          <span>{`0${Math.floor((timer / 60000) % 60)}`.slice(-2)}</span>m:
          <span>{`0${Math.floor((timer / 1000) % 60)}`.slice(-2)}</span>s:
          <span>{`0${Math.floor((timer / 10) % 100)}`.slice(-2)}</span>
        </div>
        <div>
          <button onClick={() => setIsTiming(true)}>Start</button>
          <button onClick={() => setIsTiming(false)}>Stop</button>
          <button onClick={() => setTimer(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
