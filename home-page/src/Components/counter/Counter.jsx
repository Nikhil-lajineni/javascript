import React, {useState} from 'react';
import './Counter.css';

function Counter(){
        var myArray=useState(0);
        var countValue = 0;

        function increment(){
            countValue = countValue + 1;
            console.log(countValue);
            myArray[1](myArray[0]+1);
        }
        return (
            <div className='counter'>
                
                <h2>on click value is: {myArray[0]}</h2>
                <button onClick={increment}>Increment</button>
            </div>
        );
    
};
export default Counter;