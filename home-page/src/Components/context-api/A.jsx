import { useState } from "react";
import myContext from "./context";
import B from "./B";
function A(){
    const [state,setState]= useState("");
    var inputData;
    const getInputData =(event) => {
        inputData =event.target.value;
        console.log(inputData);
    }
    const getData = () => {
        setState(inputData);
    };
    return(
        <div className="classComponent">
            <h2> A component</h2>
            <input type= "text" placeholder="enter text" onChange={getInputData}/>
            <button onClick={getData}>Submit</button>
            <br/>
            <br/>
            <hr/>
            <myContext.Provider value={state}>
                <B/>
            </myContext.Provider>
            <br/>
        </div>
    );
};
export default A;