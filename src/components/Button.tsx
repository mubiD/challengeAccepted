import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Button() {

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {

    // lift state up to parent from this handler to alert the parent of the click 

        console.log('clicked')

        event.preventDefault();
      };

    return(
        <div>
            <button className="Button" onClick={buttonHandler}>click me</button>
        </div>
    )
}

export default Button;