import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/* basic 
function Sctarch(){
    return <div>
        <<h1>This is from scratch</h1>>
    </div>
}*/

/*component inside another component
function Sctarch(){
    return <div>
        <h1>This is jagadesh</h1>
        <Name/>
    </div>
}*/

// reusable components
function Sctarch(){
    return <div className="jaga">
        <Name/>
        <Name/>
        <Name/>
        <Name/>
    </div>
}



const Name = () => {
    return <h1>good in all</h1>
} 
ReactDOM.render(<Sctarch/> , document.getElementById("root")) //(whatToRender,whereToRender)
