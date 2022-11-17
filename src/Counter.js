import React, { useState, useEffect, useReducer } from 'react';
//useReducer() hook takse 2 args: a reducer function, an object to define initial state. Both will be created outside our counter function. unlike Redux reducer functions: initial state is not initialized by a default parameter in the reducer function. Instead, initial state is passed into the useReducer() hook as an argument. 

const initialState = {
  counter: 0
}//we've created an object with one key, counter, which starts with a value of 0. This is the state that we'll use when we initialize our useReducer() hook.

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + 1
      };
    case 'decrement':
      return {
        counter: state.counter - 1
      };
    case 'reset':
      return {
        counter: state.counter = 0
      };
    default:
      throw new Error(`There is no action matching ${action.type}.`);
  }
}


function Counter() {
  const [counterState, dispatchCounter] = useReducer(reducer, initialState);//if we want to access the counter state, we now need to do so through by accessing the state object first
 //if we want to update the counter state, we need to create an action object with a type property that matches the name of a case in our reducer: dispatch({type: 'increment'})

  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    console.log("effect!");
    document.title = counterState.counter;
  }, [counterState.counter]);

  return(
    <React.Fragment>
      {hidden ? <h1>Count Hidden</h1> : <h1>{counterState.counter}</h1>}
      <button onClick={() => dispatchCounter({type: 'increment'})}>Count up!</button>
      <button onClick={() => dispatchCounter({type: 'decrement'})}>Count down!</button>
      <button onClick={() => dispatchCounter({type: 'reset'})}>reset!</button>

      <button onClick={() => setHidden(!hidden)}>Hide/Show</button>
    </React.Fragment>
  )
}
//We can simply call counter using JSX, which will display that property's current value. We also create an onClick listener so that a user can click a button to trigger the setCounter method. We need this to be a callback function so we can pass in an argument, otherwise it'll run on page load. This will replace the current value of counter, overwriting its previous value. Now we have local state in a function component! 

export default Counter;