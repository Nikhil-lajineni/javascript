import React, {useState} from 'react';
import './Counter.css';

function Counter(){
        // var myArray=useState(0);
        // var countValue = 0;
        let[state,setState]=useState(0);

        function increment(){
            // countValue = countValue + 1;
            // console.log(countValue);
            setState(state+1);
        }
        return (
            <div className='counter'>
                
                <h2>on click value is:{state}</h2> 
                {/* {myArray[0]} */}
                <button onClick={increment}>Increment</button>
            </div>
        );
    
};
export default Counter;