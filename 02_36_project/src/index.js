import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css";

function Pics() {
    return <div className='about'> <h1>THIS IS PICTURE</h1>
    <Name/>
    <Photo className = "images"/>
    </div>
}

const Name = () => { 
  return <h2>BOOK</h2>
}

const Photo = () => {
  return <div>
    <img src = "https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png" alt='noimage'></img>
  </div>
}
ReactDOM.render(<Pics/> , document.getElementById('root'));

