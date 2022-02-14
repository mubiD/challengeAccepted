import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Button() {

  // lift state to parent to let parent know that button has been clicked

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {

        console.log('clicked')

        event.preventDefault();
      };

    return(
        <div className="BtnDiv">
            <button className="Button" onClick={buttonHandler}>click me</button>
        </div>
    )
};

export default Button;