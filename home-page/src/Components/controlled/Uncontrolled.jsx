import React from 'react';

function Uncontrolled() {
    let changePara=()=>{
        let data =document.querySelector("input");
        let para=document.querySelector("p");
        para.innerHTML=data.value;
        data.value="";
    }
    return (
        <div style={
            {
                padding: "30px"
            }
        }>
            <input type="text" placeholder="Enter text" /><br /><br />
            <button onClick={changePara}>Submit</button><br></br>
            <p></p>
        </div>
    );
}
export default Uncontrolled;