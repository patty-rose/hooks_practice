import { useState, useEffect } from 'react';

function useTimer() {//
  // stateful logic for our timer will go here! No UI code.. that's the job of React components
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTimer(timerState => timerState + 1)
      }, 1000
    )}

    return () => clearInterval(interval);
  }, [isActive]);

  return [isActive, timer, setIsActive];//Just like with the useState hook, we're returning our variables in an array. We could choose an object instead, if that is preferable to structure your data.
}

export default useTimer;

// We can now import this hook into any component that we want to use a timer in. If we had three separate components, we could use the useTimer hook to create three separate timers, all with separate state. This is exactly what it means to reuse stateful logic