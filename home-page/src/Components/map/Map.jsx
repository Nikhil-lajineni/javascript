import React, {useState} from 'react';
function map(){
    let [state, setState] = useState([1,2,3,4,5]);
    const changeData=()=>{
        setState(["Nikhil","Rahul","Rohit","Raj","Ravi"]);
    } 
    return (
        <div>
            <h2>Map function</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, modi?</p>
            <div>
                <ol>
                    {state.map(function(element,index){
                        return <li>{element}</li>
                    })}

                </ol>
            </div>
            <button onClick={changeData}>Change Data</button>
        </div>
    );
}
export default map;