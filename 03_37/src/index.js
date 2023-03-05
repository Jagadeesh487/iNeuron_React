import React from "react";
import ReactDOM from "react-dom";

function Forth(){
  return <div>
    <h1>TYPES OF SHOES</h1>
    <Photo/>
    <Name/>
  </div>
}

const Photo =() => <img src="https://rukminim1.flixcart.com/image/200/200/kit6hzk0-0/toy-sport/k/q/l/inline-skates-abec-7-unisex-indoor-and-outdoor-adjustable-size-original-imafygsgdruhej5m.jpeg?q=70" alt="no iamge"></img>

const Name =() => <h3>AR Jouiet Mansion Blue Skatting Skates and Skateboards</h3>

ReactDOM.render(<Forth/>,document.getElementById('root'))