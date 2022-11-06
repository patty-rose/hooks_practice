import React, { useState, useEffect } from 'react';

function Timer() {
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState(0);
  //We're using two state variables, timer and isActive, to track the value of our timer and whether it is active or not.

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTimer(timerState => timerState + 1)
      }, 1000
    )}

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <React.Fragment>
      {isActive ? <h1>{timer}</h1> : <h1>Timer Stopped</h1>}
      <button onClick={() => setIsActive(!isActive)}>Start/Stop</button>
    </React.Fragment>
  );
}

export default Timer;