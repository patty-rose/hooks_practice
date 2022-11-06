import React, { useState, useEffect } from 'react';


function Counter() {
  const [counter, setCounter] = useState(0);//The useState hook returns an array that we destructure into two variables. The first variable contains the state value, and the second variable is a function that we can use to set the state value. uncommon to write it this way but it is essentially the same as: 
  // const counterState = useState(0);
  // const counter = counterState[0];
  // const setCounter = counterState[1];
  //first var should be named after the state: counter .. second should be set[firstVar] or setCounter. the argument given to the useState() hook represents the state property's intiial value.

  const [hidden, setHidden] = useState(false);

  useEffect(() => {//  //useEffect is first run after the first render of the component. Without further configuration, useEffect runs after every re-render of the component.useEffect doesn't return anything.
    console.log("effect!");
    document.title = counter;//With document.title = counter, we're updating the value of the <title> tags of our HTML to the current value of our counter. Now if we click on our Count! and Hide/Show buttons, we'll see our "effect!" message logged each time and the title will match the current value of our counter.
  }, [counter]);//This second argument is called a dependency array, and it can contain one or more state variables or props within it. When we add a dependency array to our useEffect hook, we're saying that whether our effect should run depends on whether the value of the state variables in our dependency array have changed. When we add counter as our dependency, we're specifically directing useEffect to run the effect only if the value of counter changes. if given an empty arra [], or no state to watch-- then it will only be called the first time it's rendered

  return(
    <React.Fragment>
      {hidden ? <h1>Count Hidden</h1> : <h1>{counter}</h1>}
      <button onClick={() => setCounter(counter + 1)}>Count!</button>
      <button onClick={() => setHidden(!hidden)}>Hide/Show</button>
    </React.Fragment>
  )
}
//We can simply call counter using JSX, which will display that property's current value. We also create an onClick listener so that a user can click a button to trigger the setCounter method. We need this to be a callback function so we can pass in an argument, otherwise it'll run on page load. This will replace the current value of counter, overwriting its previous value. Now we have local state in a function component! 

export default Counter;