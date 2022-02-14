import React from 'react';
import './App.css';
import Button from './components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // initialize the array of 15 colors in state

  // initialize the isClicked varaible in state 

  // initialize the current color variable in state

  // write fxns that will:
    // 1. recieve the click event and update the isClicked state variable from false -> true.
    // 2. iterate through the array of colors and increment by one. return the current color, and set it to state
    // 3. recieve the current color from fxn 2 and apply the color as a style property
    
    // these fxns need to be written for and operate on both the Button as well as the BtnDiv
    // the Button needs to start at index 1
    // the BtnDiv needs to start at index 0
    // the iterations need to be infinitely looped

  return (
    <div className="App">
      <div>
        <Button/>
      </div>
    </div>
  );
}

export default App;
