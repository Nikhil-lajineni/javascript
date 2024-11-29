import { useReducer } from "react";
import React from "react";

function Counter(){
    function myReducer(state,action){
        if(action.type==="increment"){
            return state+action.count;
        }
        else if(action.type==="decrement"){
            return state-action.count;
        }
        else{
            return state;
        }
    }
    var [count,dispatch]=useReducer(myReducer, 0);

    

    return (
    <div
    style={
        {
            display:"flex",
            
            justifyContent:"center",
            alignItems:"center",
            padding:"10px",
            margin:"10px",

            
            
        }
    }>
        <h2
        >The value of counter is : {count}</h2>
        
        <button style={
            {
                padding:"10px",
                margin:"10px",
                backgroundColor:"blue",
                color:"white",
                border:"none",
                borderRadius:"5px",
                cursor:"pointer"
            }
        } onClick={()=>{dispatch({type: "increment",count: 1})}}>increment</button>
        <button style={
            {
                padding:"10px",
                margin:"10px",
                backgroundColor:"red",
                color:"white",
                border:"none",
                borderRadius:"5px",
                cursor:"pointer"
            }
        } onClick={()=>{dispatch({type: "decrement",count: 5})}}> decrement</button>
    </div>
    );
}
export default Counter;