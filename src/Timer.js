import React, { useState, useEffect } from 'react';
import useTimer from './hooks/useTimer';

function Timer() {
  // const [isActive, setIsActive] = useState(false);
  // const [timer, setTimer] = useState(0);
  // //We're using two state variables, timer and isActive, to track the value of our timer and whether it is active or not.

  // useEffect(() => {//We use a useEffect hook to set up an interval when our timer is active, and to remove it when our timer is stopped.
  //   let interval;

  //   if (isActive) {
  //     interval = setInterval(() => {
  //       setTimer(timerState => timerState + 1)
  //     }, 1000
  //   )}

  //   return () => clearInterval(interval);
  // }, [isActive]);//useEffect clean up mechanism- return a function from the callback function we pass into the useEffect hook. this fn calls JavaScript's built-in clearInterval function to clear the interval we created. When we return a function from a useEffect hook, it will run this function when our component unmounts to clean up our effects. However, since React runs effects every re-render (unless we specify otherwise), React also performs this clean up before re-running the effect on a subsequent render. In the case of our Timer component, we've specified that our effect should only run when the isActive state variable changes. So, anytime isActive changes our interval will be cleared and then re-created only if isActive is set to true.

  const [isActive, timer, setIsActive] = useTimer();//from our new custom hook. we destructure the three variables from the useTimer hook in the same order in which they are returned.

  return (
    <React.Fragment>
      {isActive ? <h1>{timer}</h1> : <h1>Timer Stopped</h1>}
      <button onClick={() => setIsActive(!isActive)}>Start/Stop</button>
    </React.Fragment>
  );
}

export default Timer;

// You may have noticed something else that's new in the useEffect hook that we've created for our Timer component. Notice that when we create the interval, we're passing in a function when we call setTimer to update the value of the timer state:

//   useEffect(() => {
//     let interval;

//     if (isActive) {
//       interval = setInterval(() => {
//         // Notice the argument we pass into setTimer
//         setTimer(timerState => timerState + 1)
//       }, 1000
//     )}

//     return () => clearInterval(interval);
//   }, [isActive]);
// This is in contrast to what we've done up until now, which is to directly pass in a new value for the state variable. For our timer state variable, this would look like setTimer(timer + 1).

// Note that the arrow function makes use of an implicit return, which can be hard to read and reason about. If you prefer, the same arrow function above can be re-written as follows:

// setTimer(timerState => {
//   return timerState + 1
// })
// So why pass in a callback function? It allows us to use the timer state, without having to pass in timer as a dependency to our useEffect hook. To understand this, let's look at the alternative.

// If we don't use a callback function, we would have to pass in the timer state variable as a dependency like so:

//   useEffect(() => {
//     let interval;

//     if (isActive) {
//       interval = setInterval(() => {
//         // Notice the updated code below.
//         setTimer(timer + 1)
//       }, 1000
//     )}

//     return () => clearInterval(interval);
//   }, [isActive, timer]); // Notice the new dependency.
// While our timer will work as expected, the issue with this code is that it's less efficient because our effect will be called every time the value of the timer state variable changes! That's every second. The solution here is to use the option to pass in a function to setTimer instead of a new state value:

// setTimer(timerState => timerState + 1)
// With this callback function, our useState hook will handle passing in the timer state as the value for the timerState parameter. In turn, this code will increment timer state by 1. What's more, we don't have to pass in timer to the useEffect dependency array. This means that our effect will only be called when isActive changes, which is exactly what we want.