import { useState } from "react";
import { useRef } from "react";
function UseRef() {
    let [state,setState]=useState("andhra");
    var city="pune";
    let myCityObj= useRef("hyd");
    let myButtonRef=useRef();
    return (
        <div style={
            {textAlign:"center",
            marginTop:"100px",
            justifyContent:"center",
            }
        }>
            <h2>the state value is : {state}, {myCityObj.current}</h2>
            <button ref={myButtonRef} onClick={()=> {console.log(state,myCityObj.current);
                myButtonRef.current.style.backgroundColor="red";
            }}>print state : {state}</button>
            <button onClick={()=> {setState("telangana")}}>change state</button>
            <button onClick={()=> {city="pune",myCityObj.current=city}}>update city</button>
        </div>
    );
}
export default UseRef;