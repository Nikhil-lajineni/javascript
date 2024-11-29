import React, { useState } from 'react';
import  mystore from '../../redux-store/store';
function Name(){
let [name,SetName]=useState("");
const getName=()=>{
    const myObj={
        type : "Name",
        data: name
    };
    mystore.dispatch(myObj);
    
}

    return (
        <div>
            <input onChange={(e)=> SetName(e.target.value)} type="text" placeholder="Enter your name"/>
            <button onClick={getName}>Submit</button>
        </div>
    );
}
export default Name;